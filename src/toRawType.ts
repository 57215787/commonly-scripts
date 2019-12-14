import {
    toTypeString
} from "./toTypeString"
export function toRawType(value: any): string {
    return toTypeString(value).slice(8, -1)
}