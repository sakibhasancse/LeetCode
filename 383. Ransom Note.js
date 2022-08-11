/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function (ransomNote, magazine) {
//   const s = magazine.includes(ransomNote)
//   if (s) return true;
//   else {
//     const newRansomNote = ransomNote.split("")
//     const newMagazine = magazine.split("")
//     let result = true
//     for (var i = 0; i < newRansomNote.length; i++) {
//       const aa = newMagazine.find((item) => item === newRansomNote[i])
//       console.log({ aa })
//       if (!aa) result = false
//     }
//     return result

//   }
// };


// var canConstruct = function (ransomNote, magazine) {
//   let hashmap = {};

//   for (var i of ransomNote) {
//     if (hashmap[i]) hashmap[i] = hashmap[i] + 1
//     else hashmap[i] = 1
//   }

//   if (magazine.length === 0 && !hashMap[magazine]) return false

//   for (var i of magazine) {
//     if (hashmap[i]) hashmap[i] = hashmap[i] - 1
//     if (!hashmap[i]) delete hashmap[i]
//   }

//   return !Object.keys(hashmap).length
// };



var canConstruct = function (ransomNote, magazine) {
  const ransomNoteArray = ransomNote.split('');

  for (let i = 0; i < ransomNoteArray.length; i++) {
    const index = magazine.search(ransomNoteArray[i]);
    if (index >= 0) {
      magazine = magazine.slice(0, index) + magazine.slice(index + 1, magazine.length);
    } else {
      return false
    }
  }
  return true;
};


var canConstruct = function (ransomNote, magazine) {

  const ransonLength = ransomNote.length;
  const magazineLength = magazine.length;
  if (magazineLength < ransonLength) return false

  let hash = {}
  for (var i = 0; i < magazineLength; i++) {
    const element = magazine[i]
    if (hash[element])  hash[element]++
    else hash[element] = 1
  }
  for (var i = 0; i < ransonLength; i++) {
    const element = ransomNote[i]
    if (hash[element]) hash[element]--
    else return false
  }
  return true
};

console.log(canConstruct("swq",
  "swqdf"))