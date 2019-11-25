export function isNative(Ctor: any): boolean {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}