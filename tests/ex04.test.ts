import isEvenOrOdd from "../exercises/ex04";

describe("isEvenOrOdd", () => {
  test('returns "8 is even and the 11th after 8 is odd (19)" for input 8', () => {
    expect(isEvenOrOdd(8)).toBe("8 is even and the 11th after 8 is odd (19).");
  });

  test('returns "19 is odd and the 11th after 19 is even (30)" for input 19', () => {
    expect(isEvenOrOdd(19)).toBe(
      "19 is odd and the 11th after 19 is even (30)."
    );
  });

  test('returns "0 is even and the 11th after 0 is odd (11)" for input 0', () => {
    expect(isEvenOrOdd(0)).toBe("0 is even and the 11th after 0 is odd (11).");
  });

  test('returns "-1 is odd and the 11th after -1 is even (10)" for input -1', () => {
    expect(isEvenOrOdd(-1)).toBe(
      "-1 is odd and the 11th after -1 is even (10)."
    );
  });

  test('returns "10 is even and the 11th after 10 is odd (21)" for input 10', () => {
    expect(isEvenOrOdd(10)).toBe(
      "10 is even and the 11th after 10 is odd (21)."
    );
  });
});
