import sumAllNumbers from "../exercises/ex06";

describe("sumAllNumbers", () => {
  test("returns 6 for (1, 2, 3)", () => {
    expect(sumAllNumbers(1, 2, 3)).toBe(6);
  });

  test("returns 50 for (5, 10, 15, 20)", () => {
    expect(sumAllNumbers(5, 10, 15, 20)).toBe(50);
  });

  test("returns 30 for (2, 4, 6, 8, 10)", () => {
    expect(sumAllNumbers(2, 4, 6, 8, 10)).toBe(30);
  });

  test("returns 0 when no arguments are passed", () => {
    expect(sumAllNumbers()).toBe(0);
  });

  test("returns correct sum for negative numbers", () => {
    expect(sumAllNumbers(-1, -2, -3)).toBe(-6);
  });

  test("returns correct sum for a mix of positive and negative numbers", () => {
    expect(sumAllNumbers(10, -2, 3, -1)).toBe(10);
  });
});
