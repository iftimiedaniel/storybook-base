import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/assets/FJR-Tokens.css';
import '../src/assets/RR-Tokens.css';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      Fjallraven: 'Mode 1',
      RoyalRobbins: 'Mode 2',
      Hanwag: 'Mode 3',
      Tierra: 'Mode 4',
    },
    defaultTheme: 'Fjallraven',
    attributeName: 'data-theme',
  }),
];

const preview = {
  parameters: {
    options: {
      // storySort: {
      //   method: "alphabetical",
      //   includeNames: true,
      //   order: ["*"]
      // }
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
