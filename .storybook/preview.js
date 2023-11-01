import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '/src/assets/css/tokens/globalTokens.css';
import '/src/assets/css/tokens/fjrTokens.css';
import '/src/assets/css/tokens/rrTokens.css';
import '/src/assets/css/tokens/hanTokens.css';
import '/src/assets/css/tokens/tieTokens.css';
import '/src/assets/css/typeScale.scss';

export const themeConfig = {
  themes: {
    Fjallraven: 'FJR',
    RoyalRobbins: 'RR',
    Hanwag: 'HAN',
    Tierra: 'TIE',
  },
  defaultTheme: 'Fjallraven',
};

export const decorators = [
  withThemeByDataAttribute({
    ...themeConfig,
    attributeName: 'data-theme',
  }),
];

const preview = {
  parameters: {
    options: {
       storySort: {
         order: [
          'Design Tokens',
          ['Global', 'Colors', '*'],
          '*'
        ]
       }
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    html: {
      prettier: {
        tabWidth: 4,
        useTabs: false,
        bracketSameLine: true,
        vueIndentScriptAndStyle: true
      },
      highlighter: {
        showLineNumbers: true,
        wrapLines: true
      },
    },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Light',
          value: '#FFFFFF',
        },
        {
          name: 'Gray',
          value: '#6A6A6A',
        },
        {
          name: 'Dark',
          value: '#1B1C1D',
        },
      ],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
