// 检查val是否为有效的数组索引
export function isValidArrayIndex(val: any): boolean {
    const number = parseFloat(String(val))
    return number > 0 && Math.floor(number) === number && isFinite(val)
}