# superjson-codec

Uses [superjson](https://github.com/flightcontrolhq/superjson) to serialize expressions while retaining the original object type.

Accepts the following values, including arrays and objects:

- `string`
- `number`
- `boolean`
- `Date`
- `bigint`
- `Map`
- `Set`
- `ArrayBuffer`
- `Int8Array`
- `Int16Array`
- `Int32Array`
- `Uint8Array`
- `Uint16Array`
- `Uint32Array`
- `Uint8ClampedArray`
- `RegExp`
- `Error`
- `URL`
- `undefined`
- `null`

## Installation

```sh
npm install superjson-codec
```

## Usage

```ts
import { stringify, parse } from "superjson-codec";

const encoded = stringify({
	key: "value",
});

const decoded = parse(encoded);
```

## Other codecs

- [@skyrpex/string-codec](https://github.com/skyrpex/string-codec)
- [devalue-codec](https://github.com/skyrpex/devalue-codec)
- [json-codec](https://github.com/skyrpex/json-codec)
