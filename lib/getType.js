export function getType(fn) {
    const match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : '';
}
export function isSameType(a, b) {
    return getType(a) === getType(b);
}
