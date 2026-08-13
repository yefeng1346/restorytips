const NATIVE_BANNER_SCRIPT =
  "https://pl30770499.effectivecpmnetwork.com/34a15f6a5d042fa44074d21dd013e6c1/invoke.js";
const NATIVE_BANNER_CONTAINER = "container-34a15f6a5d042fa44074d21dd013e6c1";

export function NativeBanner({ label }: { label: string }) {
  return (
    <section className="native-banner" aria-label={label}>
      <script
        async={true}
        data-cfasync="false"
        src={NATIVE_BANNER_SCRIPT}
      />
      <div id={NATIVE_BANNER_CONTAINER} />
    </section>
  );
}
