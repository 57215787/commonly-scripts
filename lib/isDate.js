import { toTypeString } from "./toTypeString";
export function isDate(date) {
    return toTypeString(date) === '[object Date]' && !isNaN(date.getTime());
}
