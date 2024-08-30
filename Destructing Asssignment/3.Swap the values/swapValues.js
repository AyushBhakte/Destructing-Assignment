function swapValues(x, y) {
    // Use destructuring to swap the values of x and y
    [x, y] = [y, x];

    // Return an array with the swapped values
    return [x, y];
}

// Example usage:
let x = 5;
let y = 10;
let swapped = swapValues(x, y);
console.log(swapped); // Output: [10, 5]
