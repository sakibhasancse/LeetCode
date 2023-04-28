/**
 * @param {Array} arr
 * @return {Generator}
 */

var inorderTraversal = function*(arr) {
    yield* arr.flat(Infinity)
}

// var inorderTraversal = function*(arr) {
//     for (let sub of arr) {
//         if (Array.isArray(sub)) yield *inorderTraversal(sub);
//         else yield sub;
//     }
// };


// const getArrayValue = (arr, oldValue)=>{
//     if(!arr.length) return oldValue
//     for(let j=0; j<arr.length; j++){
//         if(typeof arr[j] === 'object') {
//            if(arr[j].length) getArrayValue(arr[j], oldValue)
//         } else if(arr[j]) oldValue.push(arr[j])
//     }
//     return oldValue
// }

// var inorderTraversal = function*(arr) {
//     let array = []
//     yield* getArrayValue(arr, array)
// };

const gen = inorderTraversal([
    [
        [6]
    ],
    [1, 3],
    []
]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done); // 3