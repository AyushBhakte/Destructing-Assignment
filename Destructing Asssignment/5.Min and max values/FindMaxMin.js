function findMaxMin(array) {
    // Use the spread operator with Math.max() and Math.min() to find max and min values
    const max = Math.max(...array);
    const min = Math.min(...array);

    // Return an object with the max and min values
    return { max, min };
}

// Example usage:
let numbers = [5, 2, 7, 1, 9];
let result = findMaxMin(numbers);
console.log(result); // Output: { max: 9, min: 1 }
