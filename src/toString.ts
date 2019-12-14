
import { isPlainObject } from './isPlainObject';
const _toString = Object.prototype.toString
export function toString(val: any): string {
    return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
            ? JSON.stringify(val, null, 2)
            : String(val)
}