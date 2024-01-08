function sumOfPositiveNumbers(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        result += arr[i];
      }
    }
    return result;
  }
  
  // Example usage:
  const myArray = [1, -2, 3, -4, 5];
  const result = sumOfPositiveNumbers(myArray);
  console.log("Sum of positive numbers:", result);
