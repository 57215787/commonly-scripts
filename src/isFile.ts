import {
  toTypeString,
} from './toTypeString';
export const isFile = (val: any): val is File => toTypeString(val) === '[object File]';
