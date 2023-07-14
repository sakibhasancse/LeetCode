function twoSum(numbers: number[], target: number): number[] {
    // Hash map solution
    // let hashMap = {}
    // for(let i = 0; i< numbers.length;i++ ){
    //     let diff = target - numbers[i]
    //     if(hashMap[diff] !== undefined){
    //         return [hashMap[diff] + 1, i+1]
    //     }
    //     hashMap[numbers[i]] = i
    // }

    // Two pointer solution

    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        let val = numbers[l] + numbers[r]
        console.log({ val, r, l })
        if (val == target) {
            return [l + 1, r + 1]
        } else if (target > val) {
            l += 1
        } else {
            r -= 1
        }
    }
};