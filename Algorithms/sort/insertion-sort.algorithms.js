const insertionSortAlgorithms = (array)=>{
    for (let i = 1; i< array.length; i++){
        let j = i - 1;
        const current = array[i];
        while (array[j] > current && j >= 0){
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = current
    }
    return array
}

const array = [3,4,1,5,6,7,2]
console.log(insertionSortAlgorithms(array))