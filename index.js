
var myArray = [10, 20, 30, 40, 50];

// Element to find
var elementToFind = 30;

// Find the index of the first occurrence of the element
var indexOfElement = myArray.indexOf(elementToFind);

// Check if the element was found
if (indexOfElement !== -1) {
    console.log(`The element ${elementToFind} was found at index ${indexOfElement}.`);
} else {
    console.log(`The element ${elementToFind} was not found in the array.`);
}