/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Example 1:

// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2, 2]
// Example 2:

// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [4, 9]
// Explanation: [9, 4] is also accepted.

var intersect = function (nums1, nums2) {
    const elements = {};

    nums1.forEach((element) => {
        elements[element] = elements[element] ? elements[element] + 1 : 1;
    });

    return nums2.filter((element) => {
        if (elements[element]) {
            elements[element]--;
            return true;
        }
        return false;
    });
};

intersect([4, 7, 9, 5], [9, 4, 9, 8, 4]);
