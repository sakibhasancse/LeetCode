/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

// const productExceptSelf = function (nums) {
//   return nums.map((item, index) => {
//     const number = nums.filter((item2, index33) => index33 !== index)
//     return number.reduce((item2, num, index2) => {
//       if (index === index2) {
//         if (index == 0) return item2
//       }
//       return item2 * num
//     })
//   }
//   )
// }


const productExceptSelf = function (nums) {
  const numberSize = nums.length;
  const result = []

  let product = 1
  for (let i = 0; i < numberSize; i++) {
    const element = nums[i];
    product *= element;
    result.push(product)
  }

  product = 1
  for (let i = numberSize - 1; i > 0; i--) {
    const element = nums[i];
    result[i] = result[i - 1] * product
    product *= element;
  }
  result[0] = product
  return result
}