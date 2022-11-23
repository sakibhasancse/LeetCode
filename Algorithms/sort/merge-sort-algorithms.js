// Merge Sort Algorithm


const mergeArray = (array, left, mid, right)=>{

}

const mergeSort = (array, left, right) =>{
    if (left < right) {
        const mid = left + (right - left) / 2;

        mergeSort(array, left, mid);
        mergeSort(array, mid + 1, right);

        mergeArray(array, left, mid, right);
    }
}

const getSortedElement = (array = [])=>{
   return mergeSort(array, 0, array.length - 1)
}

const array = [6, 5, 12, 10, 9, 1]
const sortedElement = getSortedElement(array)
console.log({sortedElement})