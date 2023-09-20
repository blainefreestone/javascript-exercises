const fibonacci = function(number) {
    if (number < 0) return "OOPS"
    const fibonacciArray = [1,1]
    for (let i = 2; i<number; i++) {
        fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1]);
    }
    return fibonacciArray[number-1];
    // return fibonacciArray;
};

// Do not edit below this line
module.exports = fibonacci;
