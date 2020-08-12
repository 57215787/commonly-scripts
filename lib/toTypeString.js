const objectToString = Object.prototype.toString;
export const toTypeString = (value) => objectToString.call(value);
