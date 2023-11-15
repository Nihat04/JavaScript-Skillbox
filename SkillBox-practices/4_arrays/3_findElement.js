function findIndex(arr, n) {
    let index = arr.indexOf(n);
    
    if (index === -1) return "Элемент не найден";
    return index;
}

console.log(findIndex([2, 5, 1, 3, 4], 3));
console.log(findIndex([5, 1, 3, 2, 7, 6, 4], 1));
console.log(findIndex([2, 1, 3], 7));
