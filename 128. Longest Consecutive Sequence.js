/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let result = [];
    const sortedArray = nums.sort();

    // return [...new Set(sortedArray)].length
    for (let i = 0; i < sortedArray.length; i++) {
        const element = nums[i];
        if (element >= 9) {
            continue;
        }
        result.push(element);
    }
    console.log({ result });
    return [...new Set(sortedArray)].length;
};
