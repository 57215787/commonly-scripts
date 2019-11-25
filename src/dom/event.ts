import {
    inBrowser
} from "../env"

let passiveSupported = false;
if (inBrowser) {
    try {
        const options = {};
        Object.defineProperty(options, 'passive', {
            get() {
                passiveSupported = true;
            }
        })
        window.addEventListener('test-passive', null, options)
    } catch (error) {

    }
}


export function on(target: HTMLElement | Document | Window, type: string, listener: EventListener, passive: boolean = false): void {
    target.addEventListener(type, listener, passiveSupported ? {
        capture: false, passive
    } : false)
}


export function off(target: HTMLElement | Document | Window, type: string, listener: EventListener): void {
    target.removeEventListener(type, listener)
}

export function stopPropagation(event: Event) {
    event.stopPropagation();
}


export function preventDefault(event: Event, isStopPropagation?: boolean) {
    if (typeof event.cancelBubble)
}
