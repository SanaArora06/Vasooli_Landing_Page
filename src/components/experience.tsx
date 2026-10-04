"use client";

import { EpisodeProvider } from "@/components/episode";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";

export function Experience({
  credibility,
  partnership,
  rest,
}: {
  credibility: React.ReactNode;
  partnership: React.ReactNode;
  rest: React.ReactNode;
}) {
  return (
    <EpisodeProvider>
      <Hero />
      {credibility}
      {partnership}
      <HowItWorks />
      {rest}
    </EpisodeProvider>
  );
}
