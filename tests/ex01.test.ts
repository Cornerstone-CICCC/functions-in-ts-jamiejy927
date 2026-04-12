import printInfoOrCalculate from "../exercises/ex01";

describe("printInfoOrCalculate", () => {
  test('returns 8 for (3, 5, "+")', () => {
    expect(printInfoOrCalculate(3, 5, "+")).toBe(8);
  });

  test('returns 2 for (5, 3, "-")', () => {
    expect(printInfoOrCalculate(5, 3, "-")).toBe(2);
  });

  test('returns "TS" for ("TS", 5, "+")', () => {
    expect(printInfoOrCalculate("TS", 5, "+")).toBe("TS");
  });

  test('returns "TS" for ("TS")', () => {
    expect(printInfoOrCalculate("TS")).toBe("TS");
  });

  test("throws an error for missing second parameter", () => {
    expect(() => printInfoOrCalculate(5)).toThrow("Invalid input");
  });

  test("throws an error for missing operation", () => {
    expect(() => printInfoOrCalculate(5, 3)).toThrow("Invalid input");
  });
});
