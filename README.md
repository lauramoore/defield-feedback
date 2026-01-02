# defield-feedback

Vue application for collecting feedback on DE field experience.  Feeds to a firebase document database and addtional cloud functions provide for data analysis.

**Important** This app is client of the defield-firebase backend application, clone that and run it in emulator mode for local development.  This application relies on functions to create the feedback documents correctly and securely (validation and rulesnpm )

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
