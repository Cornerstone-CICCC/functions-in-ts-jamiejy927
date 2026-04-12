import logType from "../exercises/ex07";

describe("logType", () => {
  test('returns "The type of the argument is: number" for number input', () => {
    expect(logType(5)).toBe("The type of the argument is: number");
  });

  test('returns "The type of the argument is: string" for string input', () => {
    expect(logType("hello")).toBe("The type of the argument is: string");
  });

  test('returns "The type of the argument is: boolean" for boolean input', () => {
    expect(logType(true)).toBe("The type of the argument is: boolean");
  });

  test('returns "The type of the argument is: object" for object input', () => {
    expect(logType({})).toBe("The type of the argument is: object");
  });

  test('returns "The type of the argument is: object" for null input', () => {
    expect(logType(null)).toBe("The type of the argument is: object");
  });

  test('returns "The type of the argument is: empty array" for empty array input', () => {
    expect(logType([])).toBe("The type of the argument is: empty array");
  });

  test('returns "The type of the argument is: array of number" for array of numbers input', () => {
    expect(logType([1, 2, 3])).toBe(
      "The type of the argument is: array of number"
    );
  });

  test('returns "The type of the argument is: array of string" for array of strings input', () => {
    expect(logType(["hello", "world"])).toBe(
      "The type of the argument is: array of string"
    );
  });

  test('returns "The type of the argument is: array" for array of mixed types input', () => {
    expect(logType([1, "two", true])).toBe(
      "The type of the argument is: array"
    );
  });
});
