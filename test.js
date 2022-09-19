const name = "SAKIB HASAN"
const getCount = (name)=>{
    const result = {}
    for (let i = 0; i < name.length; i++){
        const element  = name[i]
        if (result[element]) result[element]++
        else result[element] = 1
    }
    return result
}
getCount(name)