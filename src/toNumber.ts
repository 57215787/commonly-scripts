export function toNumber(val: string): number | string {
    const number = parseFloat(val);
    return isNaN(number) ? val : number
}