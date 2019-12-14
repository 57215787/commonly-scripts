import { isNative } from "./isNative";
export var hasPromise = typeof Promise !== 'undefined' && isNative(Promise);
