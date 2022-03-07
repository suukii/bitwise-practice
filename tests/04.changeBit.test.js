import { changeBit } from "/src";

describe("changeBit", () => {
  it("should change the bit to the given value", () => {
    expect(changeBit(0b0011, 0, 0)).toBe(0b0010);
    expect(changeBit(0b0011, 3, 1)).toBe(0b1011);
  });
});
