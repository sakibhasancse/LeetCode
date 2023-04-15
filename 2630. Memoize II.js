/**
 * @param {Function} fn
 */
function memoize(fn) {
  const obj = {}

  return function (...arg) {
    let key = arg
    if (typeof key == 'object') {
      const isArray = Array.isArray(key);
      if (isArray) {
        let newKey = 'arry'
        key.map((item) => {
          if (typeof item == 'object') {
            newKey = `${newKey}-${Object.keys(item).join('')}`
          } else newKey = `${newKey}-${item}g`
        })
        key = newKey
      } else key = `obj-${Object.keys(key).join('')}`
    }
    if (obj[key] !== undefined) return obj[key]
    return obj[key] = fn(...arg)
  }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */