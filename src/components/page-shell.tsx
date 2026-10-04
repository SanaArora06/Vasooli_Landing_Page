"use client";

import { Caregiver } from "@/components/caregiver";
import { Credibility } from "@/components/credibility";
import { Faqs } from "@/components/faqs";
import { ForgottenBills } from "@/components/forgotten-bills";
import { Hero } from "@/components/hero";
import { Insight } from "@/components/insight";
import { JourneyProvider } from "@/components/journey";
import { PilotSignup } from "@/components/pilot-signup";
import { Responsibility } from "@/components/responsibility";
import { SampleClaim } from "@/components/sample-claim";
import { Situation } from "@/components/situation";

export function PageShell({
  initialRecorded,
  notice,
}: {
  initialRecorded: boolean;
  notice: string | null;
}) {
  return (
    <JourneyProvider>
      <Hero />
      <Insight />
      <Situation />
      <SampleClaim />
      <Responsibility />
      <Caregiver />
      <Credibility />
      <ForgottenBills />
      <PilotSignup initialRecorded={initialRecorded} notice={notice} />
      <Faqs />
    </JourneyProvider>
  );
}
