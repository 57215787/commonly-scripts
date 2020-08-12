import {hasOwn,isObject} from "./index"

export function isVNode(node:any) {
  return isObject(node) && hasOwn(node, 'componentOptions');
};
