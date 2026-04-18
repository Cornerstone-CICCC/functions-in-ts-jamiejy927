// Create a function that makes mathematical operations dynamically.
// This function should receive as param a string or number, number and string
// First param: string or number (mandatory)
// Second param: number (optional)
// Third param: Enum (optional) - '+', '-', '/', '*'
// If the first param is string, just return it. Otherwise, use the two numbers and the string to make the math operation
// Eg: printInfoOrCalculate(3,5,"+") //Expected result: 8
// Eg: printInfoOrCalculate(5,3,"-") //Expected result: 2
// Eg: printInfoOrCalculate("TS",5,"+") //Expected result: TS
// Eg: printInfoOrCalculate("TS") //Expected result: TS

enum Operator {
  Add = "+",
  Subtract = "-",
  Multiply = "*",
  Divide = "/"
}

const printInfoOrCalculate = (
  p1: string | number,
  p2?: number,
  p3?: string
): string | number => {
  if (typeof p1 === "string") {
    return p1;
  }

  if (typeof p1 === "number" && (p2 === undefined || p3 === undefined)) {
    throw new Error("Invalid input");
  }

  if (typeof p1 === "number" && typeof p2 === "number" && p3) {
    switch (p3) {
      case Operator.Add:
        return p1 + p2;
      case Operator.Subtract:
        return p1 - p2;
      case Operator.Multiply:
        return p1 * p2;
      case Operator.Divide:
        return p1 / p2;
      default:
        throw new Error("Invalid input");
    }
  }

  return p1;
};

// Tests
console.log(printInfoOrCalculate(3, 5, "+")); // Expected result: 8
console.log(printInfoOrCalculate(5, 3, "-")); // Expected result: 2
console.log(printInfoOrCalculate("TS", 5, "+")); // Expected result: "TS"
console.log(printInfoOrCalculate("TS")); // Expected result: "TS"

export default printInfoOrCalculate;
