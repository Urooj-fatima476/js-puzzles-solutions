// Sample object
var myObject = {
    name: "John",
    age: 25,
    city: "New York",
    occupation: "Engineer"
};

// Iterate through the properties using a for-in loop
for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(key + ": " + myObject[key]);
    }
}
