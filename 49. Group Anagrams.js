/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Example 1:

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function (strs) {
  const listOfStrs = {}
  for (var i = 0; i < strs.length; i++) {
    const element = strs[i]
    const sortedElement = element.split('').sort().join('');
    const storedElement = listOfStrs[sortedElement]

    if (storedElement) {
      console.log(listOfStrs[sortedElement])
      listOfStrs[sortedElement] = [...storedElement, element]
    } else {
      listOfStrs[sortedElement] = [element]
    }

  }
  const result = Object.values(listOfStrs)
  return result
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])) //Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]