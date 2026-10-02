"use client";

import { useEffect, useRef, useState } from "react";
import {
  LANGUAGES,
  ROLES,
  SUCCESS_MESSAGE,
  validatePilot,
  type FieldErrors,
} from "@/lib/pilot-schema";

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-line bg-ivory px-3 py-3 text-base text-ink";

type Notice = string | null;

export function PilotSignup({
  initialRecorded,
  notice,
}: {
  initialRecorded: boolean;
  notice: Notice;
}) {
  const [recorded, setRecorded] = useState(initialRecorded);
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [language, setLanguage] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [banner, setBanner] = useState<Notice>(notice);
  const [loading, setLoading] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const focusTarget = useRef<"success" | "summary" | "banner" | null>(null);

  useEffect(() => {
    const target = focusTarget.current;
    if (!target) return;
    const node =
      target === "success" ? successRef.current : target === "summary" ? summaryRef.current : bannerRef.current;
    node?.focus();
    focusTarget.current = null;
  }, [recorded, errors, banner]);

  const errorEntries = Object.entries(errors).filter((entry): entry is [string, string] => Boolean(entry[1]));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = {
      name,
      contactMethod,
      contactValue: contactMethod === "email" ? email : phone,
      role,
      language,
      consent,
    };
    const parsed = validatePilot(payload);
    if (!parsed.ok) {
      setErrors(parsed.fields);
      setBanner(null);
      focusTarget.current = "summary";
      return;
    }

    setErrors({});
    setBanner(null);
    setLoading(true);
    try {
      const response = await fetch("/api/pilot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => null)) as {
        stored?: boolean;
        error?: string;
        message?: string;
        fields?: FieldErrors;
      } | null;

      if (data?.stored === true) {
        setRecorded(true);
        setBanner(null);
        focusTarget.current = "success";
        return;
      }

      if (data?.error === "validation" && data.fields) {
        setErrors(data.fields);
        focusTarget.current = "summary";
        return;
      }

      setBanner(
        data?.message ||
          "We could not record your interest. Your details are still in the form. Please try again.",
      );
      focusTarget.current = "banner";
    } catch {
      setBanner("We could not reach the server. Your details are still in the form. Please try again.");
      focusTarget.current = "banner";
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="pilot" className="scroll-mt-48 px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="pilot-heading">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">Pilot interest</p>
          <h2 id="pilot-heading" className="mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-teal sm:text-4xl">
            Be part of the Vasooli pilot.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink">
            Tell us how to reach you about the proposed pilot. This form does not start a claim.
          </p>
          <ul className="mt-5 space-y-2 text-ink">
            <li>No policy numbers.</li>
            <li>No medical documents or diagnoses.</li>
            <li>No Aadhaar or bank details.</li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Hospitals, employers and TPAs can leave interest here. That does not create a partnership or a live integration.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-line bg-paper p-5 shadow-[0_18px_40px_-32px_rgba(20,63,60,0.6)] sm:p-7">
          {recorded ? (
            <div ref={successRef} tabIndex={-1} role="status" className="rounded-3xl bg-sage p-5">
              <p className="font-serif text-2xl text-teal">{SUCCESS_MESSAGE}</p>
              <p className="mt-3 text-ink">
                We will use your contact details only to talk about the pilot. This is not permission to handle a claim.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex min-h-11 items-center rounded-full border border-teal/25 bg-paper px-4 py-2 text-sm font-semibold text-teal"
                onClick={() => {
                  setRecorded(false);
                  setName("");
                  setEmail("");
                  setPhone("");
                  setRole("");
                  setLanguage("");
                  setConsent(false);
                  setErrors({});
                  setBanner(null);
                }}
              >
                Record another interest
              </button>
            </div>
          ) : (
            <form method="post" action="/api/pilot" onSubmit={onSubmit} noValidate aria-busy={loading}>
              <p className="text-sm text-ink-soft">Required fields are marked. Optional language can be left blank.</p>

              {banner ? (
                <div
                  ref={bannerRef}
                  tabIndex={-1}
                  role="alert"
                  className="mt-4 rounded-2xl border border-danger/30 bg-danger-bg px-3 py-3 text-sm text-danger"
                >
                  {banner}
                </div>
              ) : null}

              {errorEntries.length > 0 ? (
                <div ref={summaryRef} tabIndex={-1} role="alert" className="mt-4 rounded-2xl bg-danger-bg px-3 py-3 text-sm text-danger">
                  <p className="font-semibold">Please check these fields. Your entries are still here.</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {errorEntries.map(([key, message]) => (
                      <li key={key}>
                        <a href={`#pilot-${key}`} className="underline underline-offset-2">
                          {message}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div ref={summaryRef} tabIndex={-1} />
              )}

              <div className="mt-5">
                <label htmlFor="pilot-name" className="font-semibold text-teal">
                  Name <span className="font-medium text-ink-soft">(required)</span>
                </label>
                <input
                  id="pilot-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "pilot-name-error" : undefined}
                  className={fieldClass}
                />
                {errors.name ? (
                  <p id="pilot-name-error" className="mt-1 text-sm text-danger">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <fieldset className="mt-5" id="pilot-contactMethod">
                <legend className="font-semibold text-teal">
                  Preferred contact method <span className="font-medium text-ink-soft">(required)</span>
                </legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {(["email", "phone"] as const).map((method) => (
                    <label key={method} className="flex items-center gap-3 rounded-2xl border border-line bg-ivory px-3 py-3">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method}
                        checked={contactMethod === method}
                        onChange={() => setContactMethod(method)}
                      />
                      <span className="capitalize">{method}</span>
                    </label>
                  ))}
                </div>
                {errors.contactMethod ? <p className="mt-1 text-sm text-danger">{errors.contactMethod}</p> : null}
              </fieldset>

              {contactMethod === "email" ? (
                <div className="mt-5" id="pilot-contactValue">
                  <label htmlFor="pilot-email" className="font-semibold text-teal">
                    Email <span className="font-medium text-ink-soft">(required)</span>
                  </label>
                  <input
                    id="pilot-email"
                    name="contactValue"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    aria-invalid={errors.contactValue ? true : undefined}
                    aria-describedby={errors.contactValue ? "pilot-contact-error" : undefined}
                    className={fieldClass}
                  />
                </div>
              ) : (
                <div className="mt-5" id="pilot-contactValue">
                  <label htmlFor="pilot-phone" className="font-semibold text-teal">
                    Phone <span className="font-medium text-ink-soft">(required)</span>
                  </label>
                  <input
                    id="pilot-phone"
                    name="contactValue"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    aria-invalid={errors.contactValue ? true : undefined}
                    aria-describedby={errors.contactValue ? "pilot-contact-error" : undefined}
                    className={fieldClass}
                  />
                </div>
              )}
              {errors.contactValue ? (
                <p id="pilot-contact-error" className="mt-1 text-sm text-danger">
                  {errors.contactValue}
                </p>
              ) : null}

              <div className="mt-5" id="pilot-role">
                <label htmlFor="pilot-role-select" className="font-semibold text-teal">
                  Role <span className="font-medium text-ink-soft">(required)</span>
                </label>
                <select
                  id="pilot-role-select"
                  name="role"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  aria-invalid={errors.role ? true : undefined}
                  aria-describedby={errors.role ? "pilot-role-error" : undefined}
                  className={fieldClass}
                >
                  <option value="">Choose one</option>
                  {ROLES.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                {errors.role ? (
                  <p id="pilot-role-error" className="mt-1 text-sm text-danger">
                    {errors.role}
                  </p>
                ) : null}
              </div>

              <div className="mt-5" id="pilot-language">
                <label htmlFor="pilot-language-select" className="font-semibold text-teal">
                  Preferred language <span className="font-medium text-ink-soft">(optional)</span>
                </label>
                <select
                  id="pilot-language-select"
                  name="language"
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  aria-invalid={errors.language ? true : undefined}
                  aria-describedby={errors.language ? "pilot-language-error" : undefined}
                  className={fieldClass}
                >
                  <option value="">No preference</option>
                  {LANGUAGES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.language ? (
                  <p id="pilot-language-error" className="mt-1 text-sm text-danger">
                    {errors.language}
                  </p>
                ) : null}
              </div>

              <div className="mt-5" id="pilot-consent">
                <label className="flex items-start gap-3 rounded-2xl border border-line bg-ivory px-3 py-3">
                  <input
                    type="checkbox"
                    name="consent"
                    value="yes"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    aria-invalid={errors.consent ? true : undefined}
                    aria-describedby={errors.consent ? "pilot-consent-error" : undefined}
                    className="mt-1"
                  />
                  <span>
                    <span className="font-semibold text-teal">Contact about the pilot (required)</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink">
                      I agree to be contacted about the Vasooli pilot. This is only permission to discuss the pilot. It is not permission to handle a claim, and it is not consent for other marketing.
                    </span>
                  </span>
                </label>
                {errors.consent ? (
                  <p id="pilot-consent-error" className="mt-1 text-sm text-danger">
                    {errors.consent}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-teal px-5 py-3 text-base font-semibold text-paper hover:bg-teal-mid disabled:cursor-wait sm:w-auto"
              >
                {loading ? "Recording interest…" : "Record my interest"}
              </button>
              <p className="mt-3 text-sm text-ink-soft">
                Submitting this form does not submit a claim. We do not send email or messages from this page.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
