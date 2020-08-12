import { toTypeString, } from './toTypeString';
export const isFile = (val) => toTypeString(val) === '[object File]';
