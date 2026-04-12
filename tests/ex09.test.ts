import formatPhoneNumber from "../exercises/ex09";

describe("formatPhoneNumber", () => {
  test("returns formatted phone number for valid input", () => {
    expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
      "(123) 456-7890"
    );
  });

  test("returns 'It's missing digits' for input with less than 10 digits", () => {
    expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(
      "It's missing digits"
    );
  });

  test("returns 'There are too many digits' for input with more than 10 digits", () => {
    expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2])).toBe(
      "There are too many digits"
    );
  });
});
