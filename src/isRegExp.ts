import {
    toTypeString
} from "./toTypeString"
export function isRegExp(v: any): boolean {
    return toTypeString(v) === '[object RegExp]'
}