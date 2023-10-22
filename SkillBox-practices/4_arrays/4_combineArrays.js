function Combine(arr1, arr2) {
    for( let el of arr2) {
        arr1.push(el);
    }
    
    return arr1;
}

console.log(Combine([1,2,3], [9,8,7]));