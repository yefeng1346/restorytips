import Script from "next/script";

const NATIVE_BANNER_SCRIPT =
  "https://pl30770499.effectivecpmnetwork.com/34a15f6a5d042fa44074d21dd013e6c1/invoke.js";
const NATIVE_BANNER_CONTAINER = "container-34a15f6a5d042fa44074d21dd013e6c1";

export function NativeBanner() {
  return (
    <section className="native-banner" aria-label="Advertisement">
      <Script
        id="native-banner-script"
        async
        data-cfasync="false"
        src={NATIVE_BANNER_SCRIPT}
        strategy="afterInteractive"
      />
      <div id={NATIVE_BANNER_CONTAINER} />
    </section>
  );
}
