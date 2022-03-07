import { clearLowestOnBit } from "/src";

describe("clearLowestOnBit", () => {
  it("should determine whether two numbers have the same sign.", () => {
    expect(clearLowestOnBit(0b0011)).toBe(0b0010);
    expect(clearLowestOnBit(0b1000)).toBe(0b0000);
  });
});
