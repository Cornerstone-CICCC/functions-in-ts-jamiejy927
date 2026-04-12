import getRoomConfiguration from "../exercises/ex05";

interface Room {
  size: string;
  type: string;
  viewToSea: boolean;
  hasAC: boolean;
  price?: number;
}

describe("getRoomConfiguration", () => {
  test("returns correct configuration for room with default price", () => {
    const room: Room = {
      size: "Small",
      type: "Economy",
      viewToSea: false,
      hasAC: false,
    };

    expect(getRoomConfiguration(room)).toBe(`Room Configuration:
    - Size: Small
    - Type: Economy
    - View to Sea: No
    - Has AC: No
    - Price: CAD 100`);
  });

  test("returns correct configuration for room with specified price", () => {
    const room: Room = {
      size: "Medium",
      type: "Suite",
      viewToSea: true,
      hasAC: true,
      price: 300,
    };

    expect(getRoomConfiguration(room)).toBe(`Room Configuration:
    - Size: Medium
    - Type: Suite
    - View to Sea: Yes
    - Has AC: Yes
    - Price: CAD 300`);
  });

  test("returns correct configuration for room with high price", () => {
    const room: Room = {
      size: "Large",
      type: "Deluxe",
      viewToSea: true,
      hasAC: true,
      price: 500,
    };

    expect(getRoomConfiguration(room)).toBe(`Room Configuration:
    - Size: Large
    - Type: Deluxe
    - View to Sea: Yes
    - Has AC: Yes
    - Price: CAD 500`);
  });

  test("returns correct configuration for room with custom default price", () => {
    const room: Room = {
      size: "Small",
      type: "Economy",
      viewToSea: false,
      hasAC: false,
    };

    expect(getRoomConfiguration(room, 150)).toBe(`Room Configuration:
    - Size: Small
    - Type: Economy
    - View to Sea: No
    - Has AC: No
    - Price: CAD 150`);
  });
});
