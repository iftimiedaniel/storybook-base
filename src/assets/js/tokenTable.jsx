import React from "react";
import { parseCSSVariables, filterCategories, groupTokensByCategory, capitalizeFirstLetter } from "/src/assets/js/parseTokens";
import { findGetParameter } from '/src/assets/js/themeSwitcher';
import globalTokens from "/src/assets/css/tokens/globalTokens.css?inline";
import fjrTokens from "/src/assets/css/tokens/fjrTokens.css?inline";
import rrTokens from "/src/assets/css/tokens/rrTokens.css?inline";
import hanTokens from "/src/assets/css/tokens/hanTokens.css?inline";
import tieTokens from "/src/assets/css/tokens/tieTokens.css?inline";
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
                  (<div className={`token-table__preview ${previewExtraClass}`} style={previewStyle(filteredTokens[tokenName])}>{infoText && !categoryWithInfo ? infoText : null}</div>)
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

function TokenFontTable({ categoriesToInclude, fontWeights = [], isGlobal = false }) {
  const parsedTokens = getTokens({ isGlobal });
  const filteredTokens = filterCategories(parsedTokens, categoriesToInclude);
  const parsedBrandTokens = getTokens({ isGlobal: false });
  const fontWeightTokens = filterCategories(parsedBrandTokens, ["fontWeights"]);
  let fontBrandWeights = [];

  return (
    <div className="token-table">
      <table>
        <thead>
          <tr>
            <th align="left" width="40%">Variable Name</th>
            <th align="left">Value</th>
            {fontWeights.map((fontWeight, index) => (
              <th key={index}>{fontWeight}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(filteredTokens).map((tokenName) => {
            const suffix = tokenName.split("-").pop();
            const fontWeightKey = "fontWeights-brands-" + suffix;

            if (fontWeightTokens[fontWeightKey])
              fontBrandWeights = fontWeightTokens[fontWeightKey].split(",");

            return (
              <tr key={tokenName}>
                <td align="left"><pre>--{tokenName}</pre></td>
                <td align="left"><input type="text" readOnly value={filteredTokens[tokenName]} /></td>
                {fontWeights.map((fontWeight, index) => (
                  <td key={index} align="center">
                    {fontBrandWeights.includes(fontWeight.toString()) ?
                      (<div className={`token-table__preview token-table__preview--text`} style={{ fontFamily: filteredTokens[tokenName], fontWeight: fontWeight }}>Aa</div>)
                      :
                      (<div>-</div>)
                    }
                  </td>
                ))}
              </tr>
            );
          }
          )}
        </tbody>
      </table>
    </div>
  );
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

function TokenTypeTable({ categoriesToInclude, isGlobal = false }) {
  const parsedTokens = getTokens({ isGlobal });
  const filteredTokens = filterCategories(parsedTokens, categoriesToInclude);
  const parsedBrandTokens = getTokens(false);
  const fontWeightTokens = filterCategories(parsedBrandTokens, ["fontWeights"]);
  let fontBrandWeights = [];
  let fontFamilies = [];
  let myKey = uuidv4();
  const tokenElements = Object.keys(filteredTokens).map((tokenName) => {
    const suffix = tokenName.split("-").pop();
    const fontWeightKey = "fontWeights-brands-" + suffix;

    if (fontWeightTokens[fontWeightKey]) {
      fontBrandWeights = fontWeightTokens[fontWeightKey].split(",");
    }

    return (
      <div key={myKey} id={`font-family-wrapper-${suffix}-${myKey}`} style={{ display: 'none' }}>
        <h1 id={`font-name-${suffix}-${myKey}`}>&nbsp;</h1>
        {fontBrandWeights.map((fontWeight, index) => (
          <div key={`${tokenName}-${index}`}>
            <h3>Font-weight: {fontWeight}</h3>
            <div className="token-table">
              <table>
                <thead>
                  <tr>
                    <th align="left" width="40%">Preview</th>
                    <th align="left">Code</th>
                    <th align="center">Font Size</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6].map((headingLevel) => (
                    <tr key={headingLevel}>
                      <td align="left">
                        <div className={`type-${suffix} type-${headingLevel}`} style={{ fontWeight }}>
                          Heading {headingLevel}
                        </div>
                      </td>
                      <td align="left">
                        <code>{`<h${headingLevel} class="type-${suffix} type-${headingLevel}">Heading ${headingLevel}</h${headingLevel}>`}</code>
                      </td>
                      <td align="center">
                        <span
                          style={{
                            fontSize: `var(--font-size-${headingLevel})`,
                            fontFamily: `var(--font-${suffix})`,
                            display: 'none',
                          }}
                          ref={(element) => {
                            if (element) {
                              setTimeout(function () {
                                const fontSize = window.getComputedStyle(element).getPropertyValue('font-size');
                                const fontFamily = window.getComputedStyle(element).getPropertyValue('font-family').replaceAll('"', '').split(",")[0];
                                const parent = element.parentElement;
                                const familyElement = document.getElementById("font-name-" + suffix + "-" + myKey);
                                if (parent) {
                                  parent.textContent = `${fontSize}`;
                                  element.remove();
                                }

                                if (familyElement) {
                                  familyElement.textContent = `${fontFamily}`;

                                  if (fontFamilies.indexOf(fontFamily) === -1) {
                                    fontFamilies.push(fontFamily);
                                    document.getElementById("font-family-wrapper-" + suffix + "-" + myKey).style.display = "block";
                                  }
                                }
                              }, 300);
                            }
                          }}
                        ></span>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td align="left">
                      <p className={`type-${suffix}`} style={{ fontWeight }}>
                        Paragraph
                      </p>
                    </td>
                    <td align="left">
                      <code>{`<p class="type-${suffix}">Paragraph</p>`}</code>
                    </td>
                    <td align="center">16px</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    );
  });
  return tokenElements;
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
      return parseCSSVariables(hanTokens)
    case "Tierra":
      return parseCSSVariables(tieTokens)
    default:
      return parseCSSVariables(fjrTokens)
  }
}

export { TokenTable, TokenColorTable, TokenFontTable, TokenTypeTable }