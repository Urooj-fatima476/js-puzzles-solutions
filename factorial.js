function calculateFactorial(number) {
    // Check if the number is negative
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    var factorial = 1;
    var i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= number);

    return factorial;
}

// Example usage:
var num = 5;
var result = calculateFactorial(num);

console.log("The factorial of " + num + " is: " + result);
