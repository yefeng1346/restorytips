"use client";

import { useEffect, useRef } from "react";

const NATIVE_BANNER_SCRIPT =
  "https://staffresumed.com/34a15f6a5d042fa44074d21dd013e6c1/invoke.js";
const NATIVE_BANNER_CONTAINER = "container-34a15f6a5d042fa44074d21dd013e6c1";

export function NativeBanner({ label }: { label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !container.parentElement) return;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = NATIVE_BANNER_SCRIPT;
    container.parentElement.insertBefore(script, container);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, []);

  return (
    <section className="native-banner" aria-label={label}>
      <div ref={containerRef} id={NATIVE_BANNER_CONTAINER} />
    </section>
  );
}
