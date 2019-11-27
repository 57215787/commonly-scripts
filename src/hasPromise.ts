import {
    isNative
} from "./isNative"
export const hasPromise = typeof Promise !== 'undefined' && isNative(Promise)