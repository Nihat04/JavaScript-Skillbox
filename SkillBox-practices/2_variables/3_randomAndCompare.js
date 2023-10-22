function Ex3(n, m) {
    minValue = Math.min(n, m);
    maxValue = Math.max(n, m);

    let randValue1 = Math.random() * (maxValue - minValue) + minValue;
    let randValue2 = Math.random() * (maxValue - minValue) + minValue;

    console.log(randValue1, randValue2);
    console.log(
        randValue1 > randValue2,
        randValue1 < randValue2,
        randValue1 >= randValue2,
        randValue1 <= randValue2,
        randValue1 === randValue2,
        randValue1 !== randValue2,
    );
    console.log("");
}

console.log("n = 0, m = 100");
Ex3(0, 100);
Ex3(0, 100);
Ex3(0, 100);
Ex3(0, 100);
Ex3(0, 100);
console.log("");

console.log("n = 2, m = 5");
Ex3(2, 5);
Ex3(2, 5);
Ex3(2, 5);
Ex3(2, 5);
Ex3(2, 5);
console.log("");

console.log("n = 100, m = -5");
Ex3(100, -5);
Ex3(100, -5);
Ex3(100, -5);
Ex3(100, -5);
Ex3(100, -5);
console.log("");