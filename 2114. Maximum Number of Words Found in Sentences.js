/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let result = 0

  for (let sentence = 0; sentence < sentences.length; sentence++) {
    const element = sentences[sentence];
    const numberOfSentence = element.split(" ").length
    if (result < numberOfSentence) result = numberOfSentence
    
  }
  return result
};

mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])