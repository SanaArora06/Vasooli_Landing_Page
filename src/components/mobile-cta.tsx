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
      setShow(pastHero && !formOnScreen);
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
    };
  }, []);

  if (!show) return null;

  return (
    <div className="mobile-join fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ivory/95 p-3 backdrop-blur-md md:hidden">
      <a
        href="#pilot"
        className="flex min-h-12 items-center justify-center rounded-full bg-teal px-5 text-base font-semibold text-paper"
      >
        Get in early
      </a>
    </div>
  );
}
