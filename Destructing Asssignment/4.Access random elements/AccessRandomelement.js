function extractElements(array) {
    // Destructure the array to get the first, second, and last elements
    const [first, second, ...rest] = array;
    const last = rest.pop();

    // Return a new array containing the first, second, and last elements
    return [first, second, last];
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
let result = extractElements(numbers);
console.log(result);
