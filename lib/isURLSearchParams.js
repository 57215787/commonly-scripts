export const isURLSearchParams = (val) => {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
};
