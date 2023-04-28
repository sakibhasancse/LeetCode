/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  return function curried(...args) {
    if (fn.length === args.length) return fn(...args);
    else fn = fn.bind(this, ...args);
    return curried;
  };
};

var curry = function (fn) {
  return function curried(...args) {
    if (fn.length === args.length) return fn(...args);
    else return function newFun(...nesw) { return curried(...args, ...nesw) }
  };
};

var curry = function (fn) {
  const storedArgs = [];
  return function curried(...args) {
    storedArgs.push(...args);
    return storedArgs.length === fn.length ? fn(...storedArgs) : curried;
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */