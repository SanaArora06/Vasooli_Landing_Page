import "server-only";

import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import type { CleanPilot } from "@/lib/pilot-schema";

type PilotDb = DatabaseSync;

const globalForDb = globalThis as unknown as { pilotDb?: PilotDb };

function databasePath(): string {
  const configured = process.env.PILOT_DB_PATH?.trim();
  if (configured) return configured;
  return path.join(process.cwd(), "data", "pilot.sqlite");
}

function ensureSchema(db: PilotDb) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS pilot_interest (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      receipt TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      contact_method TEXT NOT NULL,
      contact_value TEXT NOT NULL,
      role TEXT NOT NULL,
      language TEXT,
      consent_to_contact INTEGER NOT NULL,
      created_at TEXT NOT NULL
    )
  `);
}

export function openPilotDb(filePath: string): PilotDb {
  if (filePath !== ":memory:") {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }
  const db = new DatabaseSync(filePath);
  ensureSchema(db);
  return db;
}

export function getDb(): PilotDb {
  if (!globalForDb.pilotDb) {
    globalForDb.pilotDb = openPilotDb(databasePath());
  }
  return globalForDb.pilotDb;
}

export function storageEnabled(): boolean {
  return process.env.PILOT_STORAGE !== "off";
}

export function insertPilotInterest(db: PilotDb, record: CleanPilot, receipt: string): number {
  const result = db
    .prepare(
      `INSERT INTO pilot_interest
        (receipt, name, contact_method, contact_value, role, language, consent_to_contact, created_at)
       VALUES (?, ?, ?, ?, ?, ?, 1, ?)`,
    )
    .run(
      receipt,
      record.name,
      record.contactMethod,
      record.contactValue,
      record.role,
      record.language,
      new Date().toISOString(),
    );

  const id = Number(result.lastInsertRowid);
  const stored = db.prepare("SELECT id FROM pilot_interest WHERE id = ?").get(id) as
    | { id?: number }
    | undefined;
  if (!stored || Number(stored.id) !== id) {
    throw new Error("Pilot interest was not stored");
  }
  return id;
}

export function hasReceipt(receipt: string): boolean {
  if (!/^[a-f0-9]{32}$/.test(receipt)) return false;
  const row = getDb().prepare("SELECT id FROM pilot_interest WHERE receipt = ?").get(receipt) as
    | { id?: number }
    | undefined;
  return Boolean(row?.id);
}
