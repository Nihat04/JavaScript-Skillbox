function RoundAndCompare(a, b, n) {
    a = Math.floor( (a - Math.floor(a)) * Math.pow(10, n) );
    b = Math.floor( (b - Math.floor(b)) * Math.pow(10, n) );

    console.log(a, b);
    console.log(
        a > b,
        a < b,
        a >= b,
        a <= b,
        a === b,
        a !== b,
    );
    console.log("");
}

RoundAndCompare(13.123456789, 2.123, 5);
RoundAndCompare(13.890123, 2.891564, 2);
RoundAndCompare(13.890123, 2.891564, 3);