import { themeConfig } from '/.storybook/preview';

function themeSwitcher() {
  let previousUrl = '';
  const observer = new MutationObserver(function () {
    if (window.location.href !== previousUrl) {
      switchTheme();
    }
  });
  const config = { subtree: true, childList: true };

  observer.observe(document, config);
}

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

function switchTheme() {
  const getGlobals = findGetParameter("globals");
  if (getGlobals === null)
    return;

  const themeName = getGlobals.split("theme:")[1];

  if (document.documentElement.dataset.theme === themeConfig.themes[themeName])
    return;

  document.documentElement.setAttribute('data-theme', themeConfig.themes[themeName]);
}

themeSwitcher()

export { findGetParameter }