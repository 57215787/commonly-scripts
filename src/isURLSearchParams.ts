export const isURLSearchParams = (val: any): val is URLSearchParams => {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
};
