import fizzBuzzArray from "../exercises/ex10";

describe("fizzBuzzArray", () => {
  it("returns correct array for input 5", () => {
    const expected = [1, 2, "Fizz", 4, "Buzz"];
    expect(fizzBuzzArray(5)).toEqual(expected);
  });

  it("returns correct array for input 15", () => {
    const expected = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ];
    expect(fizzBuzzArray(15)).toEqual(expected);
  });
});
