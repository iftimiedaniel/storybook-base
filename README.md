# Run Storybook

Make sure you use Node 18.18.1

```
npm install
```

### Storybook in dev mode (local)
```
npm run storybook
```
This will open a new browser tab with the storybook on the host `http://localhost:6006/`
 
 &nbsp;

# Build Storybook for production
```
npm run build-storybook
```
This will create a folder `storybook-static` which is the compiled version of your storybook. Feel free to copy it on a hosting, or integrate CI to migrate the code to a specific domain.

## Open compiled version locally

Run `http-server` on `storybook-static` folder in order to run it locally.
```
npx http-server ./storybook-static
```
Terminal will give you the generated server for your storybook:
```
Starting up http-server, serving ./storybook-static

http-server version: 14.1.1

http-server settings:
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://192.168.0.114:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```

In case `http-server` is not installed, you can install it with the following command:
```
npm install http-server
```
&nbsp;


# Install a new Storybook using Vue3-Vite

Make sure to use npm 18.18.1

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

Next follow the steps from [Run existing Storybook](#run-storybook) or [Build Storybook for production](#build-storybook-for-production)

