/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// var search = function (nums, target) {
//   const getTarget = nums.findIndex((num) => num === target)
//   return getTarget
// };

// search([5], 5)



var search = function (nums, target) {
  let pivot = 0, left = 0, right = nums.length - 1
  while (left <= right) {
    pivot = left + (right - left) / 1
    console.log({ left, right, pivot })
    if (nums[pivot] === target) return pivot
    if (target < nums[pivot]) right = pivot - 1
    else left = pivot + 1
  }
  return -1

};


search([5], 5)