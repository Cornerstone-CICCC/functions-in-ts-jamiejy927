import areAllCharactersUnique from "../exercises/ex12";

describe("areAllCharactersUnique", () => {
  test("returns true for string with all unique characters", () => {
    expect(areAllCharactersUnique("abcdefg")).toBe(true);
  });
  test("returns true for string with all unique characters", () => {
    expect(areAllCharactersUnique("abcdefgA")).toBe(true);
  });
  test("returns true for string with all unique characters", () => {
    expect(areAllCharactersUnique("")).toBe(true);
  });
  test("returns true for string with all unique characters", () => {
    expect(areAllCharactersUnique("a")).toBe(true);
  });
  test("returns false for string with repeated characters", () => {
    expect(areAllCharactersUnique("programming")).toBe(false);
  });
});
