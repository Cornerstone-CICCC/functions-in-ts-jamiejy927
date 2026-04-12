import reverseAndPrint from "../exercises/ex02";

describe("reverseAndPrint", () => {
  test('Return "olleh" for the input "hello"', () => {
    const result = reverseAndPrint("hello");
    expect(result).toBe("olleh");
  });

  test('Return "dlrow" for the input "world"', () => {
    const result = reverseAndPrint("world");
    expect(result).toBe("dlrow");
  });

  test('Return "54321" for the input "12345"', () => {
    const result = reverseAndPrint("12345");
    expect(result).toBe("54321");
  });
});
