function SquareArea(x1, y1, x2, y2) {
    let leg1 = Math.abs(x1 - x2);
    let leg2 = Math.abs(y1 - y2);

    return leg1*leg2;
}

console.log(
    SquareArea(2, 3, 10, 5),
    SquareArea(10, 5, 2, 3),
    SquareArea(-5, 8, 10, 5),
    SquareArea(5, 8, 5, 5),
    SquareArea(8, 1, 5, 1),
    );