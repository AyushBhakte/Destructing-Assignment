function extractNameAndStreet(person) {
    // Destructure the object to extract the name and street properties
    const {
        name,
        address: { street }
    } = person;

    // Return a new object containing the name and street properties
    return { name, street };
}

// Example usage:
let person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "123 Main St",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh",
    }
};

let result = extractNameAndStreet(person);
console.log(result); // Output: { name: 'John Doe', street: '123 Main St' }
