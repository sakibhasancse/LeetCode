/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (hash[element]) hash[element]++;
    else hash[element] = 1;
  }
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    if (hash[element]) hash[element]--;
    else return element;
  }
  return "";
};
