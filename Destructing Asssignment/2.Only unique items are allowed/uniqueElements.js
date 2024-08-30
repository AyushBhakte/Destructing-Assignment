function removeDuplicates(array) {
    // Create a new Set from the input array to remove duplicates
    let uniqueElements = new Set(array);

    // Return the Set containing only unique elements
    return uniqueElements;
}

// Example usage:
let numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);
