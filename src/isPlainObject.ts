import {
    toTypeString
} from "./toTypeString"
export const isPlainObject = (val: any): val is object => toTypeString(val) === '[object Object]'