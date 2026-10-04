"use client";

import { useEffect, useState } from "react";

export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector("[data-hero-cta]");
    const pilot = document.getElementById("pilot");

    const update = () => {
      if (document.body.dataset.nav === "open") {
        setShow(false);
        return;
      }
      const heroBottom = heroCta?.getBoundingClientRect().bottom ?? 1;
      const pilotRect = pilot?.getBoundingClientRect();
      const pastHero = heroBottom < 8;
      const formOnScreen = pilotRect
        ? pilotRect.top < window.innerHeight * 0.72 && pilotRect.bottom > 120
        : false;
      const visible = pastHero && !formOnScreen;
      setShow(visible);
      document.body.style.paddingBottom = visible ? "4.75rem" : "";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = new MutationObserver(update);
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-nav"] });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer.disconnect();
      document.body.style.paddingBottom = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div className="mobile-join fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 p-3 backdrop-blur-md md:hidden">
      <a
        href="#pilot"
        className="flex min-h-12 items-center justify-center rounded-full bg-teal px-5 text-base font-semibold text-paper"
      >
        Join the pilot waitlist
      </a>
    </div>
  );
}
