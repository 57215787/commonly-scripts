import { toTypeString } from "./toTypeString";
export var isPlainObject = function (val) { return toTypeString(val) === '[object Object]'; };
