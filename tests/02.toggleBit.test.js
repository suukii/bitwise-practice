import { toggleBit } from "/src";

describe("toggleBit", () => {
  it("should toggle the given bit", () => {
    expect(toggleBit(0b0011, 0)).toBe(0b0010);
    expect(toggleBit(0b0011, 3)).toBe(0b1011);
  });
});
