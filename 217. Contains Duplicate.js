/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//   let duplicate = nums.filter((item, index) => nums.indexOf(item) !== index)
//   if (duplicate.length > 0) return true
//   return false
// };

// var containsDuplicate = function (nums) {
// let duplicate = false;
// for(var i= 0; i < nums.length; i++){
//     for(var j = 0; j < nums.length; j++){
//         if(nums[i] === nums[j] && j !== i) duplicate=true
//     }
// }
// return duplicate
// };



var containsDuplicate = function (nums) {
  const hashSet = new Set()
  for (let num = 0; num < nums.length; num++) {
    const element = nums[num];
    if (hashSet.has(element)) return true
    else hashSet.add(element)
  }
  return false
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))