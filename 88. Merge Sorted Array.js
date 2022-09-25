/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Example 1:

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]
// Explanation: The arrays we are merging are[1, 2, 3] and[2, 5, 6].
// The result of the merge is[1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.
//   Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are[1] and[].
// The result of the merge is[1].
//   Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are[] and[1].
// The result of the merge is[1].
// Note that because m = 0, there are no elements in nums1.The 0 is only there to ensure the merge result can fit in nums1.

var merge = function (nums1, m, nums2, n) {
  let nums1Index = m - 1;
  let nums2Index = n - 1;

  let writer = nums1.length - 1;

  while (writer >= 0) {
    const nums1Value = nums1Index >= 0 ? nums1[nums1Index] : -Infinity;
    const nums2Value = nums2Index >= 0 ? nums2[nums2Index] : -Infinity;

    if (nums1Value > nums2Value) {
      nums1[writer] = nums1Value;

      nums1Index -= 1;
    } else {
      nums1[writer] = nums2Value;

      nums2Index -= 1;
    }

    writer -= 1;
  }
};
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([1], 1, [], 0);
// merge([0], 0, [1], 1)
