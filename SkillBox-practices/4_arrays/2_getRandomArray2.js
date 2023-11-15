function getRandomArray(count) {
    arr = [];

    for (let i = 0; i < count; i++) {
        arr.push(i+1);
    }

    for (let i in arr) {
        randomIndex = Math.floor(Math.random() * count);
        value = arr[randomIndex];
        arr[randomIndex] = arr[i]
        arr[i] = value
    }

    return arr;
}

console.log(getRandomArray(5));
console.log(getRandomArray(7));
console.log(getRandomArray(3));