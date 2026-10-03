"use client";

import { useState } from "react";
import { IconCheck, IconMissing, IconPerson } from "@/components/icons";

const STEPS = [
  {
    id: "policy",
    title: "Add your policy and first bill",
    provide: "Your policy and the first bill — often a diagnostic bill, before any hospital stay.",
    does: "Starts an episode and reads the terms that will decide it: windows, sub-limits, exclusions, documents, and the filing deadline. Nothing is treated as eligible yet.",
    person: "You confirm this is the right policy and episode, and you set three limits: a rupee ceiling, how far an escalation may go, and which family members Vasooli may act for.",
  },
  {
    id: "documents",
    title: "Bring the documents together",
    provide: "Reports, discharge papers, bills and recovery records as they arrive.",
    does: "Organises the evidence and shows what is still missing.",
    person: "You step in when a fact is unclear, or when a document cannot be collected within the authorised scope.",
  },
  {
    id: "approve",
    title: "Review the facts and approve",
    provide: "Corrections to anything uncertain, including facts that disagree.",
    does: "Prepares the claim packet and lays out the facts it would rely on.",
    person: "You verify those facts and approve the final submission. Vasooli does not send it without you.",
  },
  {
    id: "followup",
    title: "Keep the claim moving",
    provide: "Authority for the channels you are comfortable using, and any paper only you can get.",
    does: "Follows up and handles document requests within the authorised scope and available channels.",
    person: "Anything outside that scope, and every consequential decision, comes back to you.",
  },
  {
    id: "settlement",
    title: "Understand the settlement",
    provide: "The settlement advice, if it is not already with the episode.",
    does: "Compares the settlement with the submitted claim and explains each deduction for review.",
    person: "You decide whether to accept a partial settlement, ask for a review, or appeal.",
  },
] as const;

type StepId = (typeof STEPS)[number]["id"];

function PreviewFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[1.75rem] border border-line bg-paper p-5 shadow-[0_18px_40px_-30px_rgba(20,63,60,0.65)]">
      <div className="flex items-center justify-between gap-3">
        <p className="font-semibold text-teal">{title}</p>
        <p className="rounded-full bg-sage px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-teal">
          Illustrative
        </p>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function StepPreview({ id }: { id: StepId }) {
  if (id === "policy") {
    return (
      <PreviewFrame title="Episode opened">
        <dl className="space-y-3 text-sm">
          <div className="rounded-2xl bg-sage px-3 py-3">
            <dt className="font-semibold text-teal">Policy</dt>
            <dd className="text-ink">Sample health policy noted. Terms are identified, not decided.</dd>
          </div>
          <div className="rounded-2xl border border-line px-3 py-3">
            <dt className="font-semibold text-teal">First bill</dt>
            <dd className="text-ink">Diagnostic centre bill, before hospitalisation.</dd>
          </div>
        </dl>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink">
          <IconPerson /> You confirm this episode
        </p>
      </PreviewFrame>
    );
  }

  if (id === "documents") {
    return (
      <PreviewFrame title="Document status">
        <ul className="space-y-2 text-sm">
          <li className="flex items-center justify-between gap-3 rounded-2xl bg-sage px-3 py-2">
            <span className="inline-flex items-center gap-2"><IconCheck /> Consultation note</span>
            <span className="font-semibold">Received</span>
          </li>
          <li className="flex items-center justify-between gap-3 rounded-2xl bg-sage px-3 py-2">
            <span className="inline-flex items-center gap-2"><IconCheck /> Diagnostic bill</span>
            <span className="font-semibold">Received</span>
          </li>
          <li className="flex items-center justify-between gap-3 rounded-2xl border border-dashed border-teal/40 bg-peach-soft/60 px-3 py-2">
            <span className="inline-flex items-center gap-2"><IconMissing /> MRI report</span>
            <span className="font-semibold">Missing</span>
          </li>
        </ul>
      </PreviewFrame>
    );
  }

  if (id === "approve") {
    return (
      <PreviewFrame title="Final review">
        <p className="text-sm text-ink">The packet is ready for you to read. It is not submitted from this preview.</p>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="rounded-2xl border border-line px-3 py-2">Procedure date — waiting for you if documents disagree</li>
          <li className="rounded-2xl border border-line px-3 py-2">Documents listed with what is still missing</li>
        </ul>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal">
          <IconPerson /> Approval stays with you
        </p>
      </PreviewFrame>
    );
  }

  if (id === "followup") {
    return (
      <PreviewFrame title="Follow-up, not yet sent">
        <p className="rounded-2xl bg-ivory px-3 py-3 text-sm text-ink">
          A possible request: ask the diagnostic centre for the missing MRI report, using a channel you have authorised.
        </p>
        <p className="mt-3 text-sm font-medium text-ink-soft">Nothing is sent from this page. No insurer, hospital or TPA is contacted.</p>
      </PreviewFrame>
    );
  }

  return (
    <PreviewFrame title="Settlement explanation">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Sample figures</p>
      <dl className="mt-3 space-y-2 text-sm">
        <div className="flex items-center justify-between gap-3">
          <dt>Submitted</dt>
          <dd className="font-semibold">₹1,84,000</dd>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-ivory-deep" aria-hidden="true">
          <div className="h-full w-full rounded-full bg-sage-deep" />
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt>Allowed in this sample</dt>
          <dd className="font-semibold">₹1,42,500</dd>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-ivory-deep" aria-hidden="true">
          <div className="h-full w-[78%] rounded-full bg-teal" />
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt>Shown for your review</dt>
          <dd className="font-semibold">₹41,500 in deductions</dd>
        </div>
      </dl>
      <p className="mt-3 text-sm text-ink-soft">You choose what to do next. Vasooli explains the difference. It does not accept it for you.</p>
    </PreviewFrame>
  );
}

export function HowItWorks() {
  const [selected, setSelected] = useState<StepId>("policy");

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const key = event.key;
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(key)) return;
    event.preventDefault();
    const nextIndex =
      key === "Home" ? 0 : key === "End" ? STEPS.length - 1 : key === "ArrowDown" ? (index + 1) % STEPS.length : (index - 1 + STEPS.length) % STEPS.length;
    const next = STEPS[nextIndex];
    if (!next) return;
    setSelected(next.id);
    document.getElementById(`step-${next.id}`)?.focus();
  }

  return (
    <section id="how-it-works" className="scroll-mt-48 bg-sage/55 px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="how-heading">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">How it works</p>
          <h2 id="how-heading" className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
            Five steps, with you at the decisions.
          </h2>
          <p className="mt-4 max-w-2xl font-serif text-2xl leading-snug text-teal">
            Automate the chase. Keep consequential decisions with you.
          </p>
          <ol className="mt-8 space-y-3">
            {STEPS.map((step, index) => {
              const pressed = selected === step.id;
              return (
                <li key={step.id}>
                  <article className={`rounded-3xl border bg-paper p-4 sm:p-5 ${pressed ? "border-teal" : "border-line"}`}>
                    <button
                      id={`step-${step.id}`}
                      type="button"
                      aria-pressed={pressed}
                      aria-controls="how-preview"
                      onClick={() => setSelected(step.id)}
                      onKeyDown={(event) => onKeyDown(event, index)}
                      className="flex w-full items-start gap-3 rounded-2xl text-left"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage font-semibold text-teal">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block font-serif text-xl leading-tight text-teal sm:text-2xl">{step.title}</span>
                        <span className="mt-1 block text-sm font-medium text-ink-soft">
                          {pressed ? "Showing this step in the preview" : "Select to preview this step"}
                        </span>
                      </span>
                    </button>
                    <dl className="mt-4 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-ivory px-3 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-teal">You provide</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-ink">{step.provide}</dd>
                      </div>
                      <div className="rounded-2xl bg-sage/80 px-3 py-3">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-teal">Vasooli does</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-ink">{step.does}</dd>
                      </div>
                      <div className="rounded-2xl bg-peach-soft/70 px-3 py-3">
                        <dt className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-teal">
                          <IconPerson /> A person acts
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed text-ink">{step.person}</dd>
                      </div>
                    </dl>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="lg:sticky lg:top-36" id="how-preview" aria-live="polite">
          <div key={selected} className="motion-rise">
            <StepPreview id={selected} />
          </div>
          <p className="mt-3 text-sm text-ink-soft">
            The preview changes as you move through the steps. The written steps above stay available either way.
          </p>
        </div>
      </div>
    </section>
  );
}
