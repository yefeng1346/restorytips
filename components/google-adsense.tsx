import Script from "next/script";

const GOOGLE_ADSENSE_CLIENT = "ca-pub-4496419024798372";

export function GoogleAdsense() {
  return (
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
