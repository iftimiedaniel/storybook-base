import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/assets/FJR-Tokens.css';

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
    storybookCodePanel:{
      disabled: true,
      allowedExtensions: ["js", "jsx", "ts", "tsx", "css", "sass", "scss"]
    }
  },
};

export default preview;
