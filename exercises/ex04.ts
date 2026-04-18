// Define a function named isEven or Odd that takes a number as a parameter and returns a string saying that the input is even or not.
// Also return the number after the 10th position in opposite in the string. If the param is 8, you should print 8 is event and the 11th after 8 is odd (19).

const isEvenOrOdd = (n: number): string => {
  const isNEven = n % 2 === 0;
  const nextN = n + 11;
  const isNextEven = nextN % 2 === 0;

  const nStatus = isNEven ? "even" : "odd";
  const nextStatus = isNextEven ? "even" : "odd";

  return `${n} is ${nStatus} and the 11th after ${n} is ${nextStatus} (${nextN}).`;
};

// Test cases:
console.log(isEvenOrOdd(8)); // Expected output: "8 is even and the 11th after 8 is odd (19)."
console.log(isEvenOrOdd(19)); // Expected output: "19 is odd and the 11th after 19 is even (30)."

export default isEvenOrOdd;
