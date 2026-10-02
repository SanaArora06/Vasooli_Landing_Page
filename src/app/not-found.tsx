import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-mid">Page not found</p>
        <h1 className="mt-3 font-serif text-4xl text-teal">This page is not part of the Vasooli pilot.</h1>
        <p className="mt-4 text-lg text-ink">
          The introduction to the proposed service is on the home page. No claim can be submitted from here.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-12 items-center rounded-full bg-teal px-5 py-3 font-semibold text-paper"
        >
          Back to Vasooli
        </Link>
      </div>
    </section>
  );
}
