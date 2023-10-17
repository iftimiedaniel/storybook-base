# Run existing Storybook

```
npm install
npm run storybook
```

# Install a new Storybook using Vue3-Vite

Switch to NPM 18.18.1

First create a Vue-Vite project
```
npm create vue@latest
```
Choose options
- ? Add TypeScript? » No
- ? Add JSX Support? » No
- ? Add Vue Router for Single Page Application development? » No
- ? Add Pinia for state management? » No
- ? Add Vitest for Unit Testing? » No
- ? Add an End-to-End Testing Solution? » - Use arrow-keys. Return to submit.
- » No
- ? Add ESLint for code quality? » Yes
- ? Add Prettier for code formatting? » No (it will be added with the storybook HTML preview addon)

Change directory to your new vue project
```
npm install
npx storybook@latest init
```
Terminate batch » Yes

Install Accessibility Add-on https://storybook.js.org/docs/react/addons/install-addons
```
npm install @storybook/addon-a11y --save-dev
```

Install Html Preview Add-on https://storybook.js.org/addons/@reapit/storybook-addon-html/
```
npm i --save-dev @whitespace/storybook-addon-html prettier
```

Install Viewport Add-on https://storybook.js.org/addons/@storybook/addon-viewport?ref=storybookblog.ghost.io
```
npm install @storybook/addon-viewport
```

Install Backgrounds Add-on https://storybook.js.org/addons/@storybook/addon-backgrounds?ref=storybookblog.ghost.io
```
npm install @storybook/addon-backgrounds
```

Install Sass Add-on https://storybook.js.org/recipes/sass , https://storybook.js.org/addons/@storybook/addon-styling-webpack
```
npx storybook@latest add @storybook/addon-styling-webpack
npm install -D sass
```
```
npm run storybook
```

