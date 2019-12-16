// 检查val是否为有效的数组索引
export function isValidArrayIndex(val: any): boolean {
    const n = parseFloat(String(val));
    return n > 0 && Math.floor(n) === n && isFinite(val);
}