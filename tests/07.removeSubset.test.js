import { removeSubset } from "/src";

describe("removeSubset", () => {
  it("should remove one bit vector from another", () => {
    expect(removeSubset(0b1010, 0b0111)).toBe(0b1000);
    expect(removeSubset(0b1111, 0b0101)).toBe(0b1010);
  });
});
