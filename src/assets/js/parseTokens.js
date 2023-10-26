/* eslint-disable no-unused-vars */
function parseCSSVariables(cssString) {
  const colorTokens = {};
  const cssVariableRegex = /--([\w-]+):\s*(.*?);/g;
  let match;
  while ((match = cssVariableRegex.exec(cssString)) !== null) {
    const [fullMatch, tokenName, tokenValue] = match;
    colorTokens[tokenName] = tokenValue.trim();
  }
  return colorTokens;
}

function groupTokensByCategory(colorTokens) {
  const categories = {};
  for (const tokenName in colorTokens) {
    const category = tokenName.split("-")[1];

    if (!categories[category]) {
      categories[category] = {};
    }
    categories[category][tokenName] = colorTokens[tokenName];
  }
  return categories;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterCategories(colorTokens, categoriesToInclude, tokensToExclude) {
  const filteredTokens = {};
  for (const tokenName in colorTokens) {
    const category = tokenName.split("-")[0];
    if (categoriesToInclude.includes(category) && (!tokensToExclude || !tokensToExclude.includes(tokenName))) {
      filteredTokens[tokenName] = colorTokens[tokenName];
    }
  }
  return filteredTokens;
}

export { parseCSSVariables, groupTokensByCategory, filterCategories, capitalizeFirstLetter }