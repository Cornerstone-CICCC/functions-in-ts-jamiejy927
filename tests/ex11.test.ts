import displayLikes from "../exercises/ex11";

describe("displayLikes", () => {
  test("returns correct string when no one likes it", () => {
    expect(displayLikes([])).toBe("no one likes this");
  });

  test("returns correct string when one person likes it", () => {
    expect(displayLikes(["Peter"])).toBe("Peter likes this");
  });

  test("returns correct string when two people like it", () => {
    expect(displayLikes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
  });

  test("returns correct string when three people like it", () => {
    expect(displayLikes(["Max", "John", "Mark"])).toBe(
      "Max, John and Mark like this"
    );
  });

  test("returns correct string when more than three people like it", () => {
    expect(displayLikes(["Alex", "Jacob", "Mark", "Max"])).toBe(
      "Alex, Jacob and 2 others like this"
    );
  });
  test("returns correct string when more than three people like it", () => {
    expect(displayLikes(["Alex", "Jacob", "Mark", "Max", "Jill"])).toBe(
      "Alex, Jacob and 3 others like this"
    );
  });
});
