const themeInitScript = `
(() => {
  try {
    const saved = window.localStorage.getItem("restory-theme");
    document.documentElement.dataset.theme = saved === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export function ThemeInit() {
  return <script id="restory-theme-init" dangerouslySetInnerHTML={{ __html: themeInitScript }} />;
}
