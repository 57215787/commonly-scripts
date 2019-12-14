import { isDate } from './isDate';
export function isSameDate(a, b) {
    if (isDate(a) && isDate(b)) {
        return a.getTime() === b.getTime();
    }
    else {
        return false;
    }
}
