/**
 * Theme handling for the portfolio.
 * Dark navy is the default theme. The visitor's choice is stored in
 * localStorage; if no choice has been made, the operating system
 * preference decides. The <html> element carries data-theme="light"
 * when light mode is active.
 */

const THEME_STORAGE_KEY = "flora-portfolio-theme";

function getPreferredTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

function applyTheme(themeName) {
  if (themeName === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  updateToggleLabel(themeName);
}

function updateToggleLabel(activeTheme) {
  const themeToggleButton = document.querySelector(".theme-toggle");
  if (!themeToggleButton) {
    return;
  }
  const nextTheme = activeTheme === "light" ? "dark" : "light";
  themeToggleButton.textContent = nextTheme === "light" ? "light mode" : "dark mode";
  themeToggleButton.setAttribute("aria-label", "Switch to " + nextTheme + " mode");
}

function toggleTheme() {
  const currentTheme = document.documentElement.hasAttribute("data-theme")
    ? "light"
    : "dark";
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  applyTheme(nextTheme);
}

document.addEventListener("DOMContentLoaded", function () {
  applyTheme(getPreferredTheme());
  const themeToggleButton = document.querySelector(".theme-toggle");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
  }
});
