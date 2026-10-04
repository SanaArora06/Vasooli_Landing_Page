export const SUCCESS_MESSAGE =
  "Your interest has been recorded. You have not submitted a claim.";

export const STORAGE_UNAVAILABLE_MESSAGE =
  "Signup is unavailable in this preview. Your details were not saved.";

export const STAGES = [
  { value: "tests", label: "Tests or treatment have started" },
  { value: "discharge", label: "We've just been discharged" },
  { value: "waiting", label: "We're waiting for reimbursement" },
  { value: "partial", label: "We received a partial payment or rejection" },
  { value: "exploring", label: "Just exploring" },
] as const;

export const LANGUAGES = [
  "English",
  "Hindi",
  "Bengali",
  "Marathi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Gujarati",
  "Malayalam",
  "Punjabi",
] as const;

export type Stage = (typeof STAGES)[number]["value"];

export type CleanPilot = {
  name: string;
  contactMethod: "email" | "phone";
  contactValue: string;
  stage: Stage;
  language: string | null;
};

export type FieldKey =
  | "name"
  | "contactMethod"
  | "contactValue"
  | "stage"
  | "language"
  | "consent";

export type FieldErrors = Partial<Record<FieldKey, string>>;

const STAGE_VALUES = new Set<string>(STAGES.map((stage) => stage.value));
const LANGUAGE_VALUES = new Set<string>(LANGUAGES);

function asRecord(input: unknown): Record<string, unknown> | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  return input as Record<string, unknown>;
}

function readString(record: Record<string, unknown>, key: string): string {
  const value = record[key];
  return typeof value === "string" ? value.trim() : "";
}

function readConsent(value: unknown): boolean {
  return value === true || value === "yes" || value === "on";
}

export function normalisePhone(input: string): string | null {
  const compact = input.replace(/[()\s.-]/g, "");
  if (!/^\+?\d{10,15}$/.test(compact)) return null;
  return compact;
}

export function validatePilot(
  input: unknown,
): { ok: true; value: CleanPilot } | { ok: false; fields: FieldErrors } {
  const record = asRecord(input);
  const fields: FieldErrors = {};

  if (!record) {
    return {
      ok: false,
      fields: { name: "Enter the name we should use." },
    };
  }

  const name = readString(record, "name").replace(/\s+/g, " ");
  if (!/^[\p{L}][\p{L}\s.'-]{1,79}$/u.test(name)) {
    fields.name =
      "Enter the name we should use. Letters, spaces, apostrophes and hyphens are fine.";
  }

  const contactMethod = readString(record, "contactMethod");
  let cleanedContact = "";
  if (contactMethod !== "email" && contactMethod !== "phone") {
    fields.contactMethod = "Choose email or phone.";
  } else if (contactMethod === "email") {
    const email = readString(record, "contactValue");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
      fields.contactValue = "Enter a valid email address.";
    } else {
      cleanedContact = email;
    }
  } else {
    const phone = normalisePhone(readString(record, "contactValue"));
    if (!phone) {
      fields.contactValue = "Enter a phone number with 10 to 15 digits.";
    } else {
      cleanedContact = phone;
    }
  }

  const stage = readString(record, "stage");
  if (!STAGE_VALUES.has(stage)) {
    fields.stage = "Choose where your family is in the process.";
  }

  const languageRaw = readString(record, "language");
  if (languageRaw && !LANGUAGE_VALUES.has(languageRaw)) {
    fields.language = "Choose a language from the list, or leave it blank.";
  }

  if (!readConsent(record.consent)) {
    fields.consent =
      "Consent is required before we can contact you about the pilot.";
  }

  if (Object.keys(fields).length > 0) {
    return { ok: false, fields };
  }

  return {
    ok: true,
    value: {
      name,
      contactMethod: contactMethod as "email" | "phone",
      contactValue: cleanedContact,
      stage: stage as Stage,
      language: languageRaw || null,
    },
  };
}
