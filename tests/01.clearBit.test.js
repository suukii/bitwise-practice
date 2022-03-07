import { clearBit } from "/src";

describe("clearBit", () => {
  it("should clear the given bit", () => {
    expect(clearBit(0b0011, 0)).toBe(0b0010);
    expect(clearBit(0b1010, 3)).toBe(0b0010);
  });
});
