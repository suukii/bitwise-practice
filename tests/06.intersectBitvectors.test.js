import { intersectBitvectors } from "/src";

describe("intersectBitvectors", () => {
  it("should intersect two bit vectors", () => {
    expect(intersectBitvectors(0b1010, 0b0101)).toBe(0b0000);
    expect(intersectBitvectors(0b0100, 0b1100)).toBe(0b0100);
  });
});
