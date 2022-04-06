# js-prototypes

Read documentation and full api guide [https://dimaslanjaka.github.io/js-prototypes/](https://www.webmanajemen.com/js-prototypes/)

instalation

```shell
npm i git+https://github.com/dimaslanjaka/js-prototypes.git
```

usage

```ts
// global automated shim to all prototypes (recommended)
import "js-prototypes"

// import custom prototypes (typescript)
import "js-prototypes/src/String";
import "js-prototypes/src/Array";
import "js-prototypes/src/Object";

// import custom prototypes (javascript)
import "js-prototypes/dist/String";
import "js-prototypes/dist/Array";
import "js-prototypes/dist/Object";

// import global prototypes (javascript)
import "js-prototypes/dist/libs/globals";
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
- full available apis [Prototypes Array](/Array.html).
```ts
console.log(typeof array_shuffle); // function
```