export function noop(a, b, c) { }
var hasConsole = typeof console !== 'undefined';
export var warn = function (msg) {
    if (hasConsole) {
        console.error(msg);
    }
};
export var tip = function (msg) {
    if (hasConsole) {
        console.warn(msg);
    }
};
export var log = function (msg) {
    if (hasConsole) {
        console.log(msg);
    }
};
