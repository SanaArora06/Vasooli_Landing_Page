"use client";

import { useId, useState } from "react";
import { IconCheck, IconConflict, IconLater, IconMissing, IconPerson } from "@/components/icons";

type ScenarioId = "missing" | "disagree" | "ready" | "deduction";
type DocId =
  | "consult"
  | "bill"
  | "mri"
  | "discharge"
  | "hospital"
  | "implant"
  | "pharmacy"
  | "followup"
  | "physio";

type DocStatus = "received" | "missing" | "conflict" | "later";

const DOCS: Array<{ id: DocId; phase: string; name: string; detail: string }> = [
  { id: "consult", phase: "Before hospitalisation", name: "Orthopaedic consultation", detail: "Sample note linking knee pain to a prescribed MRI." },
  { id: "bill", phase: "Before hospitalisation", name: "Diagnostic centre bill", detail: "Sample bill dated 2 March 2026. It refers to an MRI of the knee." },
  { id: "mri", phase: "Before hospitalisation", name: "MRI report", detail: "The report file named on the diagnostic bill." },
  { id: "discharge", phase: "Hospital stay", name: "Discharge summary", detail: "Sample summary. Procedure date written as 12 March 2026." },
  { id: "hospital", phase: "Hospital stay", name: "Hospital bill", detail: "Sample bill. A date on it reads 14 March 2026." },
  { id: "implant", phase: "Hospital stay", name: "Implant invoice", detail: "Sample invoice kept with the hospital documents." },
  { id: "pharmacy", phase: "Recovery", name: "Pharmacy bills", detail: "Sample bills for prescribed medicines after discharge." },
  { id: "followup", phase: "Recovery", name: "Follow-up consultation", detail: "Sample note from the review visit." },
  { id: "physio", phase: "Recovery", name: "Physiotherapy notes", detail: "Sample record of prescribed physiotherapy." },
];

const SCENARIOS: Array<{ id: ScenarioId; title: string; summary: string }> = [
  {
    id: "missing",
    title: "A report is missing",
    summary: "The MRI is named on the bill, but the report file is not in the episode.",
  },
  {
    id: "disagree",
    title: "Two documents disagree",
    summary: "The discharge summary and the hospital bill show different dates. Vasooli asks you to clarify.",
  },
  {
    id: "ready",
    title: "The claim is ready",
    summary: "You get a final review, with Approve and Review. Nothing is submitted until you decide.",
  },
  {
    id: "deduction",
    title: "A deduction arrives",
    summary: "A sample settlement explains two deductions and lets you seek a review.",
  },
];

const STATUS_COPY: Record<DocStatus, string> = {
  received: "Received",
  missing: "Missing",
  conflict: "Dates disagree",
  later: "Later in the episode",
};

function statusFor(id: DocId, scenario: ScenarioId): DocStatus {
  if (scenario === "missing") {
    if (id === "mri") return "missing";
    if (id === "consult" || id === "bill") return "received";
    return "later";
  }
  if (scenario === "disagree") {
    if (id === "discharge" || id === "hospital") return "conflict";
    if (id === "pharmacy" || id === "followup" || id === "physio") return "later";
    return "received";
  }
  return "received";
}

function StatusIcon({ status }: { status: DocStatus }) {
  if (status === "received") return <IconCheck />;
  if (status === "missing") return <IconMissing />;
  if (status === "conflict") return <IconConflict />;
  return <IconLater />;
}

const WHY: Record<
  ScenarioId,
  { source: string; evidence: string; missing: string; next: string }
> = {
  missing: {
    source: "Sample diagnostic centre bill, 2 March 2026, for an MRI of the knee.",
    evidence: "The consultation note and the bill are on file. The bill refers to the scan.",
    missing: "The MRI report file itself.",
    next: "Ask the centre for that report. In this demo, nothing is sent.",
  },
  disagree: {
    source: "Sample discharge summary lists the procedure on 12 March 2026. The sample hospital bill shows 14 March 2026.",
    evidence: "Both documents are on file. Neither date has been chosen for you.",
    missing: "Which date you want the packet to use.",
    next: "You clarify the date. Vasooli does not pick one.",
  },
  ready: {
    source: "Sample episode checklist. Sample policy terms are used only to organise the packet, not to decide coverage.",
    evidence: "Consultation, diagnostic bill, MRI report, discharge summary, hospital bill, implant invoice, pharmacy bills, follow-up note and physiotherapy notes.",
    missing: "Nothing on this sample checklist. A real insurer may still ask for more.",
    next: "You approve or ask to review. No claim is submitted from this page.",
  },
  deduction: {
    source:
      "Sample settlement advice. Sample clause: room rent payable up to ₹5,000 a day. Sample clause: gloves, toiletries and similar consumables are not payable. These clauses are invented for the illustration.",
    evidence: "Sample submitted total ₹1,84,000. Sample settlement allows ₹1,42,500.",
    missing: "Whether you want these sample deductions reviewed.",
    next: "You accept the sample settlement or seek a review. No message is sent.",
  },
};

type Choices = {
  retrievalNoted: boolean;
  dateChoice: "12 March 2026" | "14 March 2026" | "I need to check" | null;
  packetChoice: "approve" | "review" | null;
  settlementChoice: "review" | "accept" | null;
};

const EMPTY_CHOICES: Choices = {
  retrievalNoted: false,
  dateChoice: null,
  packetChoice: null,
  settlementChoice: null,
};

export function SampleClaim() {
  const baseId = useId();
  const [scenario, setScenario] = useState<ScenarioId>("missing");
  const [whyOpen, setWhyOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<DocId>("mri");
  const [choices, setChoices] = useState<Choices>(EMPTY_CHOICES);
  const [live, setLive] = useState("Showing the missing-report moment of the sample episode.");

  const why = WHY[scenario];
  const phases = ["Before hospitalisation", "Hospital stay", "Recovery"];

  function selectScenario(next: ScenarioId) {
    setScenario(next);
    setWhyOpen(false);
    const focusDoc: DocId =
      next === "missing" ? "mri" : next === "disagree" ? "discharge" : next === "deduction" ? "hospital" : "consult";
    setSelectedDoc(focusDoc);
    const title = SCENARIOS.find((item) => item.id === next)?.title ?? "Sample";
    setLive(`${title}. This is still a demo on this page.`);
  }

  function reset() {
    setScenario("missing");
    setWhyOpen(false);
    setSelectedDoc("mri");
    setChoices(EMPTY_CHOICES);
    setLive("Demo reset. Showing the missing-report moment. No claim was submitted.");
  }

  function onTabKey(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? SCENARIOS.length - 1
          : event.key === "ArrowRight" || event.key === "ArrowDown"
            ? (index + 1) % SCENARIOS.length
            : (index - 1 + SCENARIOS.length) % SCENARIOS.length;
    const next = SCENARIOS[nextIndex];
    if (!next) return;
    selectScenario(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  }

  const activeDoc = DOCS.find((doc) => doc.id === selectedDoc) ?? DOCS[0];

  return (
    <section id="explore-a-claim" className="scroll-mt-48 px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="claim-heading">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">A sample episode</p>
            <h2 id="claim-heading" className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
              See what happens to one family’s claim.
            </h2>
            <p className="mt-4 text-lg text-ink">
              This sample follows one knee-treatment episode for patient A.D.: diagnostic papers, a hospital stay, and recovery care. Dates, clauses and amounts are invented.
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-teal/25 bg-paper px-4 py-2 text-sm font-semibold text-teal hover:bg-sage"
          >
            Reset demo
          </button>
        </div>

        <p className="mt-5 inline-flex rounded-full border border-teal/15 bg-peach-soft/80 px-3 py-1.5 text-sm font-semibold text-teal">
          Illustrative example—not a real claim or coverage decision.
        </p>
        <p className="sr-only" aria-live="polite">
          {live}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2" role="tablist" aria-label="Sample claim scenarios">
          {SCENARIOS.map((item, index) => {
            const selected = scenario === item.id;
            return (
              <button
                key={item.id}
                id={`${baseId}-tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectScenario(item.id)}
                onKeyDown={(event) => onTabKey(event, index)}
                className={`rounded-3xl border p-4 text-left ${selected ? "border-teal bg-paper" : "border-line bg-paper/70"}`}
              >
                <span className="block font-serif text-xl leading-tight text-teal">{item.title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-ink">{item.summary}</span>
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${scenario}`}
          className="mt-6"
        >
          <div className="rounded-[1.75rem] border border-line bg-paper p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-serif text-2xl text-teal">Documents in this moment</h3>
              <ul className="flex flex-wrap gap-2 text-xs font-semibold text-teal">
                {(Object.keys(STATUS_COPY) as DocStatus[]).map((status) => (
                  <li key={status} className="inline-flex items-center gap-1.5 rounded-full bg-ivory px-2 py-1">
                    <StatusIcon status={status} />
                    {STATUS_COPY[status]}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              {phases.map((phase) => (
                <div key={phase}>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-soft">{phase}</h4>
                  <ul className="mt-2 space-y-2">
                    {DOCS.filter((doc) => doc.phase === phase).map((doc) => {
                      const status = statusFor(doc.id, scenario);
                      const selected = selectedDoc === doc.id;
                      return (
                        <li key={doc.id}>
                          <button
                            type="button"
                            aria-pressed={selected}
                            onClick={() => setSelectedDoc(doc.id)}
                            className={`flex w-full items-start justify-between gap-3 rounded-2xl border px-3 py-2.5 text-left text-sm ${
                              status === "missing" ? "border-dashed" : "border-solid"
                            } ${selected ? "border-teal bg-sage/70" : "border-line bg-ivory"}`}
                          >
                            <span>
                              <span className="block font-semibold text-ink">{doc.name}</span>
                              <span className="mt-1 inline-flex items-center gap-1.5 font-medium text-teal">
                                <StatusIcon status={status} />
                                {STATUS_COPY[status]}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {activeDoc ? (
              <p className="mt-4 rounded-2xl bg-ivory px-3 py-3 text-sm text-ink">
                <span className="font-semibold">{activeDoc.name}. </span>
                {activeDoc.detail} Status in this moment: {STATUS_COPY[statusFor(activeDoc.id, scenario)]}.
              </p>
            ) : null}

            <ScenarioBody
              scenario={scenario}
              choices={choices}
              onChoice={(next, message) => {
                setChoices(next);
                setLive(message);
              }}
            />

            <div className="mt-5 border-t border-line pt-4">
              <button
                type="button"
                className="inline-flex min-h-11 items-center rounded-full px-1 text-base font-semibold text-teal underline decoration-peach decoration-2 underline-offset-4"
                aria-expanded={whyOpen}
                aria-controls={`${baseId}-why`}
                onClick={() => setWhyOpen((open) => !open)}
              >
                Why this action?
              </button>
              {whyOpen ? (
                <div id={`${baseId}-why`} className="mt-3 grid gap-3 sm:grid-cols-2">
                  <WhyItem label="Source document or sample policy clause" text={why.source} />
                  <WhyItem label="Evidence available" text={why.evidence} />
                  <WhyItem label="Information still missing" text={why.missing} />
                  <WhyItem label="Next action" text={why.next} />
                </div>
              ) : (
                <div id={`${baseId}-why`} hidden />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItem({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl bg-ivory px-3 py-3">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-teal">{label}</h4>
      <p className="mt-1 text-sm leading-relaxed text-ink">{text}</p>
    </div>
  );
}

function ScenarioBody({
  scenario,
  choices,
  onChoice,
}: {
  scenario: ScenarioId;
  choices: Choices;
  onChoice: (next: Choices, message: string) => void;
}) {
  if (scenario === "missing") {
    return (
      <div className="mt-5 rounded-3xl border border-dashed border-teal/30 bg-peach-soft/40 p-4">
        <h3 className="font-serif text-2xl text-teal">The MRI report is the gap</h3>
        <p className="mt-2 text-ink">
          Vasooli would propose asking the diagnostic centre for the report named on the 2 March bill. The packet is not treated as complete while that file is missing.
        </p>
        <button
          type="button"
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-teal px-4 py-2 text-sm font-semibold text-paper hover:bg-teal-mid"
          onClick={() =>
            onChoice(
              { ...choices, retrievalNoted: true },
              "Retrieval noted in the demo only. No request was sent.",
            )
          }
        >
          Note this retrieval in the demo
        </button>
        {choices.retrievalNoted ? (
          <p className="mt-3 text-sm font-medium text-ink" role="status">
            Noted on this page only. No request was sent to a hospital, TPA or insurer.
          </p>
        ) : null}
      </div>
    );
  }

  if (scenario === "disagree") {
    return (
      <fieldset className="mt-5 rounded-3xl border border-line bg-ivory p-4">
        <legend className="px-1 font-serif text-2xl text-teal">Which date should the packet use?</legend>
        <p className="mt-2 text-ink">
          The discharge summary says 12 March 2026. The hospital bill says 14 March 2026. Vasooli will not invent the answer.
        </p>
        <div className="mt-4 grid gap-2">
          {(["12 March 2026", "14 March 2026", "I need to check"] as const).map((option) => (
            <label key={option} className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-3 py-3">
              <input
                type="radio"
                name="sample-date"
                value={option}
                checked={choices.dateChoice === option}
                onChange={() =>
                  onChoice(
                    { ...choices, dateChoice: option },
                    `You chose “${option}” in the demo. Vasooli did not decide the date.`,
                  )
                }
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {choices.dateChoice ? (
          <p className="mt-3 text-sm font-medium text-ink" role="status">
            Recorded in this demo only: {choices.dateChoice}. Vasooli did not invent an answer.
          </p>
        ) : null}
      </fieldset>
    );
  }

  if (scenario === "ready") {
    return (
      <div className="mt-5 rounded-3xl border border-teal/20 bg-sage/60 p-4">
        <h3 className="font-serif text-2xl text-teal">Final review</h3>
        <p className="mt-2 text-ink">
          In this later moment of the sample, the family has already clarified the procedure date as 12 March 2026 and the MRI report is on file. Sample total submitted: ₹1,84,000. Sample figures only.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-teal px-4 py-2 text-sm font-semibold text-paper"
            onClick={() =>
              onChoice(
                { ...choices, packetChoice: "approve" },
                "You approved the sample packet in the demo. No claim was submitted.",
              )
            }
          >
            Approve
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-teal/30 bg-paper px-4 py-2 text-sm font-semibold text-teal"
            onClick={() =>
              onChoice(
                { ...choices, packetChoice: "review" },
                "Review opened in the demo. No claim was submitted.",
              )
            }
          >
            Review
          </button>
        </div>
        {choices.packetChoice === "approve" ? (
          <p className="mt-3 text-sm font-medium text-ink" role="status">
            You approved this sample packet in the demo. No claim was submitted.
          </p>
        ) : null}
        {choices.packetChoice === "review" ? (
          <ul className="mt-3 space-y-2 text-sm text-ink" role="status">
            <li>Patient link: sample patient A.D.</li>
            <li>Episode: knee treatment, diagnostic through recovery.</li>
            <li>Date used in this sample moment: 12 March 2026, after the family confirmed it.</li>
            <li>You can still refuse. Nothing has been sent.</li>
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mt-5 rounded-3xl border border-line bg-ivory p-4">
      <h3 className="font-serif text-2xl text-teal">Sample settlement</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">Sample figures — not a payment advice</p>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <div className="flex justify-between gap-3 font-medium">
            <dt>Submitted</dt>
            <dd>₹1,84,000</dd>
          </div>
          <div className="mt-1 h-2 rounded-full bg-paper" aria-hidden="true">
            <div className="h-full w-full rounded-full bg-sage-deep" />
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-3 font-medium">
            <dt>Allowed in this sample</dt>
            <dd>₹1,42,500</dd>
          </div>
          <div className="mt-1 h-2 rounded-full bg-paper" aria-hidden="true">
            <div className="h-full w-[78%] rounded-full bg-teal" />
          </div>
        </div>
        <div className="flex justify-between gap-3 font-semibold text-teal">
          <dt>Deduction to review</dt>
          <dd>₹41,500</dd>
        </div>
      </dl>
      <ul className="mt-4 space-y-2 text-sm text-ink">
        <li className="rounded-2xl bg-paper px-3 py-2">
          Room rent difference, ₹18,000. Sample clause: room rent payable up to ₹5,000 a day. The sample bill used ₹8,000 a day for 6 days.
        </li>
        <li className="rounded-2xl bg-paper px-3 py-2">
          Non-payable consumables, ₹23,500. Sample clause: gloves, toiletries and similar items are not payable.
        </li>
      </ul>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-paper"
          onClick={() =>
            onChoice(
              { ...choices, settlementChoice: "review" },
              "You chose to seek a review in the demo. No request was sent.",
            )
          }
        >
          <IconPerson /> Seek a review
        </button>
        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-teal/30 bg-paper px-4 py-2 text-sm font-semibold text-teal"
          onClick={() =>
            onChoice(
              { ...choices, settlementChoice: "accept" },
              "You chose to accept the sample settlement in the demo. Nothing was filed.",
            )
          }
        >
          Accept this sample settlement
        </button>
      </div>
      {choices.settlementChoice === "review" ? (
        <p className="mt-3 text-sm font-medium text-ink" role="status">
          In this demo, you chose to seek a review. No request was sent.
        </p>
      ) : null}
      {choices.settlementChoice === "accept" ? (
        <p className="mt-3 text-sm font-medium text-ink" role="status">
          In this demo, you chose to accept the sample settlement. Nothing was filed.
        </p>
      ) : null}
    </div>
  );
}
