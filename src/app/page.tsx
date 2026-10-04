import { PageShell } from "@/components/page-shell";
import { hasReceipt } from "@/lib/db";
import { STORAGE_UNAVAILABLE_MESSAGE } from "@/lib/pilot-schema";

const NOTICES: Record<string, string> = {
  unavailable: STORAGE_UNAVAILABLE_MESSAGE,
  invalid:
    "Some details were missing or not valid, so nothing was saved. Please use the form again.",
  wait: "Please wait a little while before sending another note. Nothing new was saved.",
  rejected: "That submission was not accepted. Nothing was saved.",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ receipt?: string; interest?: string }>;
}) {
  const params = await searchParams;
  const receipt = typeof params.receipt === "string" ? params.receipt : "";
  let initialRecorded = false;
  let notice: string | null = null;

  if (/^[a-f0-9]{32}$/.test(receipt)) {
    try {
      initialRecorded = hasReceipt(receipt);
      if (!initialRecorded) {
        notice = "We could not find a stored interest for this link. Nothing new was saved.";
      }
    } catch {
      notice = STORAGE_UNAVAILABLE_MESSAGE;
    }
  } else if (params.interest && NOTICES[params.interest]) {
    notice = NOTICES[params.interest] ?? null;
  }

  return <PageShell initialRecorded={initialRecorded} notice={notice} />;
}
