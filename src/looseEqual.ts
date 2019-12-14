import { isObject } from './isObject';
import { isArray } from './isArray';
export function looseEqual(a: any, b: any): boolean {
    if (a === b) return true
    const isObjectA = isObject(a)
    const isObjectB = isObject(b)
    if (isObjectA && isObjectB) {
        try {
            const isArrayA = isArray(a)
            const isArrayB = isArray(b)
            if (isArrayA && isArrayB) {
                return (
                    a.length === b.length &&
                    a.every((e: any, i: any) => looseEqual(e, b[i]))
                )
            } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime()
            } else if (!isArrayA && !isArrayB) {
                const keysA = Object.keys(a)
                const keysB = Object.keys(b)
                return (
                    keysA.length === keysB.length &&
                    keysA.every(key => looseEqual(a[key], b[key]))
                )
            } else {
                return false
            }
        } catch (e) {
            return false
        }
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b)
    } else {
        return false
    }

}