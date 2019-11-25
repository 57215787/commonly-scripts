export var objectToString = Object.prototype.toString;
export var toTypeString = function (value) { return objectToString.call(value); };
export var isPlainObject = function (val) { return toTypeString(val) === '[object Object]'; };
