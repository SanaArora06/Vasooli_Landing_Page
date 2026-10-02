"use client";

import { useEffect, useState } from "react";

export function MobileCta() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const target = document.getElementById("pilot");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHide(Boolean(entry?.isIntersecting)),
      { threshold: 0.2 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ivory/95 p-3 backdrop-blur-md md:hidden">
      <a
        href="#pilot"
        className="flex min-h-12 items-center justify-center rounded-full bg-teal px-5 text-base font-semibold text-paper"
      >
        Join the pilot
      </a>
    </div>
  );
}
