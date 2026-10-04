"use client";

import { createContext, useContext, useState } from "react";
import type { Stage } from "@/lib/pilot-schema";

export const SITUATIONS = [
  {
    id: "tests" as const,
    label: "Tests or treatment have started",
    help: "Start bringing your policy, bills and prescriptions together before the paperwork piles up.",
  },
  {
    id: "discharge" as const,
    label: "We’ve just been discharged",
    help: "Check surrounding expenses and identify documents you may still need.",
  },
  {
    id: "waiting" as const,
    label: "We’re waiting for reimbursement",
    help: "See outstanding requests and the next follow-up in one place.",
  },
  {
    id: "partial" as const,
    label: "We received a partial payment or rejection",
    help: "Review the insurer’s stated reasons against your policy and supporting documents, with specialist help where needed.",
  },
];

type JourneyValue = {
  stage: Stage | "";
  setStage: (stage: Stage | "") => void;
};

const JourneyContext = createContext<JourneyValue | null>(null);

export function JourneyProvider({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<Stage | "">("");
  return <JourneyContext.Provider value={{ stage, setStage }}>{children}</JourneyContext.Provider>;
}

export function useJourney() {
  const value = useContext(JourneyContext);
  if (!value) throw new Error("useJourney must be used within JourneyProvider");
  return value;
}
