/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return -1;

    const hash = {};
    let firstOccurence = -1;
    for (var i = 0; i < needle.length; i++) {
        const element = needle[i];
        if (hash[element]) hash[element]++;
        else hash[element] = 1;
    }
    for (var i = 0; i < haystack.length; i++) {
        const element = haystack[i];
        if (hash.length === 0) return firstOccurence;
        if (hash[element]) {
            if (firstOccurence == -1) firstOccurence = i;
            hash[element]--;
        }
    }
    return Object.keys(hash).length ? -1 : firstOccurence;
};
