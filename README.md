# js-prototypes (Native Javascript Prototypes Extender Helpers)

[![Build](https://github.com/dimaslanjaka/js-prototypes/actions/workflows/npm-gulp.yml/badge.svg)](https://github.com/dimaslanjaka/js-prototypes/actions/workflows/npm-gulp.yml) [![Test Multiple NodeJS Versions](https://github.com/dimaslanjaka/js-prototypes/actions/workflows/npm-test.yml/badge.svg)](https://github.com/dimaslanjaka/js-prototypes/actions/workflows/npm-test.yml)

Read documentation and full api guide [https://dimaslanjaka.github.io/js-prototypes/](https://www.webmanajemen.com/js-prototypes/)

## instalation
npm
```shell
npm i git+https://github.com/dimaslanjaka/js-prototypes.git
```
yarn
```bash
git config --global url."https://".insteadOf ssh://
yarn add git+https://github.com/dimaslanjaka/js-prototypes.git
```

## usage
read more: http://dimaslanjaka.github.io/js-prototypes

custom source: [src](./src)

### typescript
```ts
// global automated shim to all prototypes (recommended)
import "js-prototypes"

// import custom prototypes
import "js-prototypes/src/String";
import "js-prototypes/src/Array";
import "js-prototypes/src/Object";
```
### javascript
```js
// import custom prototypes
require("js-prototypes/dist/String");
require("js-prototypes/dist/Array");
// es6 supported
import "js-prototypes/dist/Object";
```

html browser usage
```html
<script src="https://raw.githack.com/dimaslanjaka/js-prototypes/master/dist/release/bundle.js"></script>
<script>
  console.log(typeof [].addAll); // function
</script>
```

## REQUIRED
insert below codes above all import
```ts
import 'js-prototypes'; // typescript
require('js-prototypes'); // javascript
```
all global functions and prototypes modified and included successful.

## Array Example
- full example array usages [https://github.com/dimaslanjaka/js-prototypes/blob/master/tests/array.ts](https://github.com/dimaslanjaka/js-prototypes/blob/master/tests/array.ts).
- full available apis [Prototypes Array](Array.html).
<script src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2Fdimaslanjaka%2Fjs-prototypes%2Fblob%2Fmaster%2Ftests%2Farray.ts&style=github&showCopy=on"></script>
