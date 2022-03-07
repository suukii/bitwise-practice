import { unionBitvectors } from "/src";

describe("unionBitvectors", () => {
  it("should union two bit vectors", () => {
    expect(unionBitvectors(0b1010, 0b0101)).toBe(0b1111);
    expect(unionBitvectors(0b0000, 0b1100)).toBe(0b1100);
  });
});
