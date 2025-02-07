import { type SerializableRecord, parser, stringifier } from "codec-builder";
import * as superjson from "superjson";

export type { Stringified } from "codec-builder";

export type SerializablePrimitive =
	| string
	| number
	| boolean
	| Date
	| bigint
	| Map<unknown, unknown>
	| Set<unknown>
	| Int8Array
	| Int16Array
	| Int32Array
	| Uint8Array
	| Uint16Array
	| Uint32Array
	| Uint8ClampedArray
	| Error
	| RegExp
	| URL
	| undefined
	| null;

export type Serializable = SerializableRecord<SerializablePrimitive>;

// biome-ignore lint/complexity/noBannedTypes: we need to forbid Function
type Forbidden = symbol | Function;

/**
 * Serializes a {@link SerializablePrimitive} object to a string.
 */
// @__NO_SIDE_EFFECTS__
export const stringify = stringifier<SerializablePrimitive, Forbidden>(
	superjson.stringify,
);

/**
 * Parses a stringified {@link SerializablePrimitive} object to its original value.
 */
// @__NO_SIDE_EFFECTS__
export const parse = parser<SerializablePrimitive>(superjson.parse);
