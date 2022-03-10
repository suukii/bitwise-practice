import { setBits } from "/src";

describe("setBits", () => {
  it("should set bits in the given range..", () => {
    expect(setBits(0b0010010111110001, 8, 4, 0b0000110110101100)).toBe(
      0b0010110011110001
    );
  });
});
