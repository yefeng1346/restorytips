"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SuggestedLocale = "ru" | "de" | "ja";

const dismissedKey = "restory-language-suggestion-dismissed";

const languageOptions: Record<SuggestedLocale, { name: string; nativeName: string }> = {
  ru: { name: "Russian", nativeName: "Русский" },
  de: { name: "German", nativeName: "Deutsch" },
  ja: { name: "Japanese", nativeName: "日本語" },
};

function detectSuggestedLocale(): SuggestedLocale | null {
  const browserLanguages = [navigator.language, ...navigator.languages];

  for (const language of browserLanguages) {
    const baseLanguage = language.toLowerCase().split("-")[0];
    if (baseLanguage === "ru" || baseLanguage === "de" || baseLanguage === "ja") {
      return baseLanguage;
    }
  }

  return null;
}

export function LanguageSuggestion() {
  const [suggestedLocale, setSuggestedLocale] = useState<SuggestedLocale | null>(null);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(dismissedKey) === "1") return;
      setSuggestedLocale(detectSuggestedLocale());
    } catch {
      setSuggestedLocale(detectSuggestedLocale());
    }
  }, []);

  if (!suggestedLocale) return null;

  const language = languageOptions[suggestedLocale];

  function dismissSuggestion() {
    try {
      window.localStorage.setItem(dismissedKey, "1");
    } catch {
      // The banner can still be dismissed for the current render if storage is unavailable.
    }
    setSuggestedLocale(null);
  }

  return (
    <aside className="language-suggestion" aria-label="Language suggestion" role="status">
      <div className="language-suggestion__message">
        <span className="language-suggestion__marker" aria-hidden="true">◈</span>
        <p>
          We have a {language.name} version.
          {" "}
          <Link href={`/${suggestedLocale}`}>
            Switch to {language.nativeName}
          </Link>
        </p>
      </div>
      <button className="language-suggestion__dismiss" type="button" onClick={dismissSuggestion} aria-label="Dismiss language suggestion">
        ×
      </button>
    </aside>
  );
}
