function GetRandomArray(n, m, count) {
    minValue = Math.min(n, m);
    maxValue = Math.max(n, m);
    array = [];

    for (let i = 0; i < count; i++) {
        array.push(Math.random() * (maxValue - minValue) + minValue);
    };

    return(array);
}

console.log(GetRandomArray(0, 100, 100));
console.log(GetRandomArray(2, 5, 50));
console.log(GetRandomArray(100, -5, 70));
console.log(GetRandomArray(-3, -10, 42));