export function getType(fn: Function): string {
    const match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
}

export function isSameType(a: Function, b: Function) {
    return getType(a) === getType(b)
}
