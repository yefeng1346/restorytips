const NATIVE_BANNER_SCRIPT =
  "https://pl30770499.effectivecpmnetwork.com/34a15f6a5d042fa44074d21dd013e6c1/invoke.js";
const NATIVE_BANNER_CONTAINER = "container-34a15f6a5d042fa44074d21dd013e6c1";
const NATIVE_BANNER_MARKUP = `<script async="async" data-cfasync="false" src="${NATIVE_BANNER_SCRIPT}"></script><div id="${NATIVE_BANNER_CONTAINER}"></div>`;

export function NativeBanner({ label }: { label: string }) {
  return (
    <section
      className="native-banner"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: NATIVE_BANNER_MARKUP }}
    />
  );
}
