var hasOwnProperty = Object.prototype.hasOwnProperty;
export var hasOwn = function (val, key) { return hasOwnProperty.call(val, key); };
