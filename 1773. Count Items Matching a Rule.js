/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let element = 0; element < items.length; element++) {
    const elementItem = items[element];
    if (ruleKey === 'type' && elementItem[0] === ruleValue) count++
    else if (ruleKey === 'color' && elementItem[1] === ruleValue) count++
    else if (ruleKey === 'name' && elementItem[2] === ruleValue) count++
  }
  return count
};


// Solution #2
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  let index = -1;
  if (ruleKey === 'type') index = 0;
  else if (ruleKey === 'color') index = 1;
  else if (ruleKey === 'name') index = 2;

  items.forEach(element => {
    if (element[index] === ruleValue) count++
  });
  return count
};