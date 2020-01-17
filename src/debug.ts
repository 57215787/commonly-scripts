export function noop(a?: any, b?: any, c?: any) { }

const hasConsole = typeof console !== 'undefined'
export const warn = (msg:any) => {
    if (hasConsole) {
        // tslint:disable-next-line: no-console
        console.error(msg)
    }
}

export const tip = (msg:any) => {
    if (hasConsole) {
        // tslint:disable-next-line: no-console
        console.warn(msg)
    }
}


export const log = (msg:any) => {
    if (hasConsole) {
        // tslint:disable-next-line: no-console
        console.log(msg);
    }
};
