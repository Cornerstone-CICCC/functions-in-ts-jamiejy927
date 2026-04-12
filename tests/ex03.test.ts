import combine from "../exercises/ex03";

describe("combine", () => {
  test("combines two numbers", () => {
    expect(combine(2, 3)).toBe("23");
  });

  test("combines two strings", () => {
    expect(combine("Hello, ", "world!")).toBe("Hello, world!");
  });

  test("combines a number and a string", () => {
    expect(combine(5, " days")).toBe("5 days");
  });

  test("combines a string and a number", () => {
    expect(combine("Error: ", 404)).toBe("Error: 404");
  });
});
