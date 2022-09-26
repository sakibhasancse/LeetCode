/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false

//   const firstString = s.split('').sort().join('')
//   const secondString = t.split('').sort().join('')
//   if (firstString === secondString) return true
//   return false

// };

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let sCounts = {},
        tCounts = {};
    for (let word = 0; word < s.length; word++) {
        sCounts[s[word]] = 1 + sCounts[s[word]] || 1;
        tCounts[t[word]] = 1 + tCounts[t[word]] || 1;
    }
    for (let rr in sCounts) {
        if (sCounts[rr] !== tCounts[rr]) return false;
    }
    return true;
};
console.log(isAnagram('anagram', 'mnagraa'));
