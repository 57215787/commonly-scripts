import { toTypeString } from "./toTypeString";
export function toRawType(value) {
    return toTypeString(value).slice(8, -1);
}
