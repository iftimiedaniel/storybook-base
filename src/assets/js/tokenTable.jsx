import React from "react";
import { parseCSSVariables, filterCategories, groupTokensByCategory, capitalizeFirstLetter } from "/src/assets/js/parseTokens";
import { findGetParameter } from '/src/assets/js/themeSwitcher';
import globalTokens from "/src/assets/css/tokens/globalTokens.css?inline";
import fjrTokens from "/src/assets/css/tokens/fjrTokens.css?inline";
import rrTokens from "/src/assets/css/tokens/rrTokens.css?inline";
import "/src/assets/css/tokenTable.scss";

function TokenTable({ categoriesToInclude, previewStyle, previewExtraClass = null, categoryWithInfo = null, infoText = null, isGlobal = false }) {
  const parsedTokens = getTokens({ isGlobal });
  const filteredTokens = filterCategories(parsedTokens, categoriesToInclude);

  return (
    <div className="token-table">
      <table>
        <thead>
          <tr>
            <th align="left" width="60%">Variable Name</th>
            <th align="left">Value</th>
            <th width="1%">Preview</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(filteredTokens).map((tokenName) => (
            <tr key={tokenName}>
              <td align="left"><pre>--{tokenName}</pre></td>
              <td align="left"><input type="text" readOnly value={filteredTokens[tokenName]} /></td>
              <td align="center">
                {tokenName === categoryWithInfo ?
                  (<div className='token-table__info'>{infoText}</div>)
                  :
                  (<div className={`token-table__preview ${previewExtraClass}`} style={previewStyle(filteredTokens[tokenName])}></div>)
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TokenColorTable({ categoriesToInclude, isGlobal }) {
  const colorTokens = getTokens({ isGlobal });
  const filteredColorTokens = filterCategories(colorTokens, categoriesToInclude);
  const categories = groupTokensByCategory(filteredColorTokens);

  return (
    Object.keys(categories).map((categoryName, index) => {
      const categoryTokens = categories[categoryName];
      const tokenNames = Object.keys(categoryTokens);

      return (
        <div key={categoryName}>
          <h4>{capitalizeFirstLetter(categoryName)}</h4>
          <div className="token-table">
            <table>
              <thead>
                <tr>
                  <th align="left" width="60%">Variable Name</th>
                  <th align="left">Value</th>
                  <th width="1%">Preview</th>
                </tr>
              </thead>
              <tbody>
                {tokenNames.map((tokenName, tokenIndex) => {
                  const color = categoryTokens[tokenName];
                  return (
                    <tr key={tokenName}>
                      <td align="left"><pre>--{tokenName}</pre></td>
                      <td align="left"><input type="text" readOnly value={color} /></td>
                      <td align="center">
                        <div className='token-table__preview' style={{ backgroundColor: color }}></div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    })
  );
}

function getTokens({ isGlobal }) {
  if (isGlobal)
    return parseCSSVariables(globalTokens);

  const getGlobals = findGetParameter("globals");

  if (getGlobals === null)
    return parseCSSVariables(fjrTokens)

  const themeName = getGlobals.split("theme:")[1];

  switch (themeName) {
    case "RoyalRobbins":
      return parseCSSVariables(rrTokens)
    case "Hanwag":
      return null
    case "Tierra":
      return null
    default:
      return parseCSSVariables(fjrTokens)
  }
}

export { TokenTable, TokenColorTable }