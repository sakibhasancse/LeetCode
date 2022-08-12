/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let secNums = nums.splice(n, nums.length)
  const result = []
  for (let num = 0; num < nums.length; num++) {
    const element = nums[num];
    const secElement = secNums[num];
    result.push(element)
    result.push(secElement)
  }
  return result
};

shuffle([2, 5, 1, 3, 4, 7], 3)