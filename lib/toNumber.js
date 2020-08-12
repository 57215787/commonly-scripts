export function toNumber(val) {
    const number = parseFloat(val);
    return isNaN(number) ? val : number;
}
