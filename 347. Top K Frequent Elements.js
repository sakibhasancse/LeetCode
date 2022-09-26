/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const hasMap = {};

    for (var i = 0; i < nums.length; i++) {
        hasMap[nums[i]] = 1 + hasMap[nums[i]] || 1;
    }

    let result = {};
    for (var i in hasMap) {
        var resultKeys = Object.keys(result);
        const numberOfItem = hasMap[i];
        if (resultKeys.length < k) result[i] = numberOfItem;
        else if (resultKeys.length == k) {
            const resultValue = Object.values(result);
            const min = Math.min(...resultValue);
            if (min < numberOfItem) {
                const foundLowerArray = resultValue.indexOf(min);
                delete result[resultKeys[foundLowerArray]];
                result = { ...result, [i]: numberOfItem };
            }
        }
    }
    var resultArray = Object.keys(result);
    return resultArray.length ? resultArray : nums;
};

console.log(topKFrequent([6, 0, 1, 4, 9, 7, -3, 1, -4, -8, 4, -7, -3, 3, 2, -3, 9, 5, -4, 0], 6));
