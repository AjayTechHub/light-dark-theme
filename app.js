document.addEventListener('DOMContentLoaded', onPageLoad.bind(this));

function onThemeToggle(btn) {
  const currentPreference = btn.getAttribute('data-theme');

  const newPreference = currentPreference === 'light' ? 'dark' : 'light';
  btn.setAttribute('data-theme', newPreference);
  document.body.setAttribute('data-theme', newPreference);

  localStorage.setItem('athTheme', newPreference);
}

function onPageLoad() {
  const theme = this.getThemeFromConfiguration();
  const btn = document.querySelector('.theme-toggle-btn');
  if (btn && !!theme) {
    btn.setAttribute('data-theme', theme);
  }
  document.body.setAttribute('data-theme', theme);
}
function getThemeFromConfiguration() {
  const theme = localStorage.getItem('athTheme');
  if (theme && (theme === 'light' || theme === 'dark')) {
    return theme;
  }
  const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (systemDarkTheme && systemDarkTheme.matches) {
    return "dark";
  }

  const systemLightTheme = window.matchMedia("(prefers-color-scheme: light)");
  if (systemLightTheme && systemLightTheme.matches) {
    return "light";
  }

  // Fallback to light theme
  return "light";
}