import { isDate } from './isDate';
export function isSameDate(a: Date, b: Date): boolean {
    if (isDate(a) && isDate(b)) {
        return a.getTime() === b.getTime()
    }
    else {
        return false;
    }
}