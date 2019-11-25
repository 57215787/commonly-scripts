export const objectToString = Object.prototype.toString
export const toTypeString = (value: unknown): string => objectToString.call(value)
export const isPlainObject = (val: any): val is object => toTypeString(val) === '[object Object]'