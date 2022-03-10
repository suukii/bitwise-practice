import { invert } from "/src";

describe("invert", () => {
  it("should invert bits in the given range.", () => {
    expect(invert(0b0010010111110001, 8, 4)).toBe(0b0010101011110001);
  });
});
