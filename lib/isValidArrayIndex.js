export function isValidArrayIndex(val) {
    var number = parseFloat(String(val));
    return number > 0 && Math.floor(number) === number && isFinite(val);
}
