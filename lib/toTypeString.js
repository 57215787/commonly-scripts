var objectToString = Object.prototype.toString;
export var toTypeString = function (value) { return objectToString.call(value); };
