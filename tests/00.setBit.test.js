import { setBit } from "/src";

describe("setBit", () => {
  it("should set the given bit to 1", () => {
    expect(setBit(0b0010, 0)).toBe(0b0011);
    expect(setBit(0b1010, 3)).toBe(0b1010);
  });
});
