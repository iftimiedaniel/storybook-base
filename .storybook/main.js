const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
	  "@whitespace/storybook-addon-html",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
