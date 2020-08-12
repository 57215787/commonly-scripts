export function noop(a, b, c) { }
const hasConsole = typeof console !== 'undefined';
export const warn = (msg) => {
    if (hasConsole) {
        console.error(msg);
    }
};
export const tip = (msg) => {
    if (hasConsole) {
        console.warn(msg);
    }
};
export const log = (msg) => {
    if (hasConsole) {
        console.log(msg);
    }
};
