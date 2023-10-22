function FindIndex(array, n) {
    for (let i in array) {
        if (array[i] === n) {
            return i;
        }
    }

    return 'Элемент не найден';
}

console.log(FindIndex([2,5,1,3,4] , 3));
console.log(FindIndex([5,1,3,2,7,6,4], 1));
console.log(FindIndex([2,1,3], 7));