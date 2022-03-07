import { getBit } from "/src";

describe("getBit", () => {
  it("should get the given bit", () => {
    expect(getBit(0b0011, 0)).toBe(1);
    expect(getBit(0b0011, 3)).toBe(0);
  });
});
