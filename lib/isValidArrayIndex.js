export function isValidArrayIndex(val) {
    const n = parseFloat(String(val));
    return n > 0 && Math.floor(n) === n && isFinite(val);
}
