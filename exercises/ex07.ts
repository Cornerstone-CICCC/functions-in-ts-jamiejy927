// Use the `typeof` operator to create a function that dynamically determines the type of the argument and logs it.
// Return a string;

const logType = (arg: any): string => {
  const type = typeof arg;

  if (Array.isArray(arg)) {
    if (arg.length === 0) {
      return "The type of the argument is: empty array";
    }

    const itemTypes = arg.map((item) => typeof item);
    const allNumbers = itemTypes.every((t) => t === "number");
    const allStrings = itemTypes.every((t) => t === "string");

    if (allNumbers) {
      return "The type of the argument is: array of number";
    }
    if (allStrings) {
      return "The type of the argument is: array of string";
    }
    return "The type of the argument is: array";
  }

  return `The type of the argument is: ${type}`;
};

// Test cases:
console.log(logType(5)); // Expected output: "The type of the argument is: number"
console.log(logType("hello")); // Expected output: "The type of the argument is: string"
console.log(logType(true)); // Expected output: "The type of the argument is: boolean"
console.log(logType({})); // Expected output: "The type of the argument is: object"
console.log(logType(null)); // Expected output: "The type of the argument is: object"
console.log(logType([])); // Expected output: "The type of the argument is: empty array"
console.log(logType([1, 2, 3])); // Expected output: "The type of the argument is: array of number"
console.log(logType(["hello", "world"])); // Expected output: "The type of the argument is: array of string"
console.log(logType([1, "two", true])); // Expected output: "The type of the argument is: array"

export default logType;
