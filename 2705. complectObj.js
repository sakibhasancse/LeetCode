/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        let array = []
        for (const element of obj) {
            if (element) {
                if (typeof element == 'object') array.push(compactObject(element))
                else array.push(element)
            }
        }
        return array;
    }

    let newObj = {}

    for (let element in obj) {
        if (obj[element]) {
            if (typeof obj[element] == 'object') newObj[element] = compactObject(obj[element])
            else newObj[element] = obj[element]
        }
    }
    return newObj
};