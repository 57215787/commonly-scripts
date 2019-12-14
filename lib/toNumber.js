export function toNumber(val) {
    var number = parseFloat(val);
    return isNaN(number) ? val : number;
}
