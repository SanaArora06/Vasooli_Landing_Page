"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const PEOPLE = [
  { id: "me", label: "Me", possessive: "Your" },
  { id: "parent", label: "A parent", possessive: "Your parent's" },
  { id: "partner", label: "My partner", possessive: "Your partner's" },
] as const;

export const MOMENTS = [
  {
    id: "scan",
    label: "Scan booked",
    title: "The scan is booked",
    status: "The episode opens on the diagnostic bill, before admission.",
    vasooli: "Reads the window, the sub-limits, and the papers this policy asks for.",
    you: "You confirm this is the right policy.",
    phase: "Window open",
    progress: 1,
  },
  {
    id: "bills",
    label: "Bills at home",
    title: "The bills are at home",
    status: "The stay is over. The papers are still in pieces.",
    vasooli: "Lines them up and names the one that is missing.",
    you: "You allow the chase, or fetch the paper only you can get.",
    phase: "Papers moving",
    progress: 3,
  },
  {
    id: "letter",
    label: "Settlement in",
    title: "The letter has arrived",
    status: "A settlement is in. Each deduction is named.",
    vasooli: "Matches every cut to the clause behind it.",
    you: "You accept it, or ask Insurance Samadhan to take it further.",
    phase: "Your decision",
    progress: 4,
  },
] as const;

export type PersonId = (typeof PEOPLE)[number]["id"];
export type MomentId = (typeof MOMENTS)[number]["id"];

type EpisodeContextValue = {
  person: PersonId;
  setPerson: (id: PersonId) => void;
  moment: MomentId;
  setMoment: (id: MomentId) => void;
  name: string;
  setName: (value: string) => void;
  displayName: string;
  touched: boolean;
};

const EpisodeContext = createContext<EpisodeContextValue | null>(null);

export function EpisodeProvider({ children }: { children: React.ReactNode }) {
  const [person, setPersonState] = useState<PersonId>("parent");
  const [moment, setMomentState] = useState<MomentId>("bills");
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const order: MomentId[] = ["scan", "bills", "letter"];
    const timer = window.setInterval(() => {
      setMomentState((current) => order[(order.indexOf(current) + 1) % order.length] ?? "bills");
    }, 7000);
    return () => window.clearInterval(timer);
  }, [touched]);

  const personMeta = PEOPLE.find((item) => item.id === person) ?? PEOPLE[1];
  const trimmed = name.trim();
  const displayName = trimmed
    ? `${trimmed.replace(/'s$/i, "")}'s`
    : personMeta.possessive;

  function setPerson(id: PersonId) {
    setTouched(true);
    setPersonState(id);
  }

  function setMoment(id: MomentId) {
    setTouched(true);
    setMomentState(id);
  }

  return (
    <EpisodeContext.Provider
      value={{ person, setPerson, moment, setMoment, name, setName, displayName, touched }}
    >
      {children}
    </EpisodeContext.Provider>
  );
}

export function useEpisode() {
  const value = useContext(EpisodeContext);
  if (!value) throw new Error("useEpisode must be used within EpisodeProvider");
  return value;
}

export function EpisodeBoard() {
  const { person, setPerson, moment, setMoment, name, setName, displayName } = useEpisode();
  const scene = MOMENTS.find((item) => item.id === moment) ?? MOMENTS[1];
  const [clock, setClock] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit" }).format(new Date());
    const paint = window.setTimeout(() => setClock(format()), 0);
    const timer = window.setInterval(() => setClock(format()), 15000);
    return () => {
      window.clearTimeout(paint);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="rounded-[1.75rem] border border-line bg-paper p-4 shadow-[0_24px_50px_-36px_rgba(14,77,115,0.55)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
          <span className="live-dot" aria-hidden="true" />
          Your episode
        </p>
        <p className="text-sm text-ink-soft">{clock ? `As of ${clock}` : "Just now"}</p>
      </div>

      <label className="mt-4 block text-sm font-semibold text-teal" htmlFor="episode-name">
        This one is for
      </label>
      <input
        id="episode-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type a name, or choose below"
        autoComplete="off"
        className="mt-1.5 w-full rounded-2xl border border-line bg-ivory px-3 py-3 text-base text-ink"
      />

      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Who this episode is for">
        {PEOPLE.map((item) => {
          const selected = item.id === person && name.trim() === "";
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setName("");
                setPerson(item.id);
              }}
              className={`min-h-10 rounded-full px-3 py-1.5 text-sm font-semibold ${
                selected ? "bg-teal text-paper" : "bg-ivory text-teal hover:bg-sage"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2" role="group" aria-label="Where the episode is">
        {MOMENTS.map((item) => {
          const selected = item.id === moment;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setMoment(item.id)}
              className={`min-h-11 rounded-2xl px-2 py-2 text-sm font-semibold leading-tight ${
                selected ? "bg-sun text-teal" : "bg-ivory text-teal hover:bg-peach-soft"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div key={`${moment}-${displayName}`} className="motion-rise mt-4 rounded-3xl bg-ivory p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-mid">{scene.phase}</p>
        <p className="mt-1 font-serif text-2xl leading-tight text-teal">{scene.title}</p>
        <p className="text-sm font-semibold text-teal-mid">{displayName} episode</p>
        <p className="mt-2 text-sm leading-relaxed text-ink">{scene.status}</p>
        <ol className="mt-4 grid grid-cols-4 gap-2" aria-label="Episode progress">
          {["Open", "Papers", "Approval", "Settlement"].map((label, index) => {
            const done = index < scene.progress;
            return (
              <li key={label}>
                <span
                  className={`block h-1.5 rounded-full ${done ? "bg-leaf" : "bg-line"}`}
                  aria-hidden="true"
                />
                <span className={`mt-1 block text-xs font-semibold ${done ? "text-teal" : "text-ink-soft"}`}>
                  {label}
                </span>
              </li>
            );
          })}
        </ol>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="rounded-2xl bg-paper px-3 py-2">
            <dt className="font-semibold text-leaf">Vasooli</dt>
            <dd className="text-ink">{scene.vasooli}</dd>
          </div>
          <div className="rounded-2xl bg-paper px-3 py-2">
            <dt className="font-semibold text-coral">You</dt>
            <dd className="text-ink">{scene.you}</dd>
          </div>
        </dl>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-ink-soft">
        A preview on this page. Nothing is filed, and no message is sent.
      </p>
    </div>
  );
}
