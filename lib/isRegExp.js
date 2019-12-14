import { toTypeString } from "./toTypeString";
export function isRegExp(v) {
    return toTypeString(v) === '[object RegExp]';
}
