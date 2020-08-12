import { toTypeString } from "./toTypeString";
export const isPlainObject = (val) => toTypeString(val) === '[object Object]';
