
var sum = function (a, b) {
    console.log(`the sum of ${a} & ${b} is ` + (a + b));
}
var multiplication = function (a, b) {
    console.log(`the multiplication of ${a} & ${b} is ` + (a * b));
}

module.exports.sum = sum;
module.exports.multiplication = multiplication;