const test = (arr) => {
    let p1 = 0
    let p2 = 0
    for (let win in arr){
        if(arr[win] === 1){
            p1++
        }
        else{
            p2++
        }
    }

    return Math.max(p1,p2)
}

let res = test([1,2,1,2,1])
console.log(res);