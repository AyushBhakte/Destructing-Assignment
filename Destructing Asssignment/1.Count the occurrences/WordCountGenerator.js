function wordCountGenerator(text) {
    // Convert the text to lowercase to ensure case-insensitive counting
    text = text.toLowerCase();

    // Split the text into words using spaces as the delimiter
    let words = text.split(' ');

    // Create a Map to store the word counts
    let wordCountMap = new Map();

    // Iterate over each word in the array
    words.forEach(word => {
        // If the word is already in the map, increment its count
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } 
        // If the word is not in the map, add it with a count of 1
        else {
            wordCountMap.set(word, 1);
        }
    });

    // Return the Map containing word counts
    return wordCountMap;
}

// Example usage:
let text = "The quick brown fox jumps over the lazy dog The dog was not amused";
let wordCounts = wordCountGenerator(text);
console.log(wordCounts);
