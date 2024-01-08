var number = 2;

while (number <= 20) {
    console.log(number);
    number += 2;
}
var num1 = 10;
var num2 = 25;
var num3 = 15;

var maxNumber = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);

console.log("The maximum of the three numbers is: " + maxNumber);