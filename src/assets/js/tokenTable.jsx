import React from "react";
import { parseCSSVariables, filterCategories } from "/src/assets/js/parseTokens";
import cssTokens from "/src/assets/css/globalTokens.css?inline";
import "/src/assets/css/docs.scss";

export function TokenTable({ categoriesToInclude, previewStyle, previewExtraClass }) {
  const parsedTokens = parseCSSVariables(cssTokens);
  const filteredTokens = filterCategories(parsedTokens, categoriesToInclude);

  return (
    <div className="design-token-card">
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
                {tokenName !== '8-pt-numbers-full' ? 
                    (<div className={`design-token-card__preview ${previewExtraClass}`} style={previewStyle(filteredTokens[tokenName])}></div>)
                    : 
                    (<div className='design-token-card__info'>Used for circles</div>)
                  }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}