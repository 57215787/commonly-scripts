import { hasOwn, isObject } from "./index";
export function isVNode(node) {
    return isObject(node) && hasOwn(node, 'componentOptions');
}
;
