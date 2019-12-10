import {
    toTypeString
} from "toTypeString"
export function isDate(date: Date): boolean {
    return toTypeString(date) === '[object Date]' && !isNaN(date.getTime())
}
