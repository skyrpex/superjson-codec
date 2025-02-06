# superjson-codec

Uses [superjson](https://github.com/flightcontrolhq/superjson) to serialize expressions while retaining the original object type.

Accepts the following primitives, including arrays and objects:

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
import * as jsonCodec from "superjson-codec";

const encoded = jsonCodec.stringify({
	key: "value",
});
// encoded = "{"key":"value"}"

const decoded = jsonCodec.parse(encoded);
// decoded = { key: "value" }
```

## Other codecs

- [@skyrpex/string-codec](https://github.com/skyrpex/string-codec)
- [devalue-codec](https://github.com/skyrpex/devalue-codec)
- [json-codec](https://github.com/skyrpex/json-codec)
