// Let's create the famous FizzBuzz!
// The challenge is to write a function called fizzBuzzArray that takes in a number and returns an array.
// The array should contain all the numbers from 1 to the number passed in.
// However, if the number is divisible by 3, you should replace the number with "Fizz".
// If the number is divisible by 5, you should replace the number with "Buzz".
// If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".

const fizzBuzzArray = (n: number): (number | string)[] => {
  const result: (number | string)[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
};

export default fizzBuzzArray;

fizzBuzzArray(5); // Expected result: [1, 2, "Fizz", 4, "Buzz"]
fizzBuzzArray(15); // Expected result" [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
