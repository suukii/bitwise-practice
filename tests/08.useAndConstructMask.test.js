import {
  isEither2LowestBitsOn,
  isBoth2LowestBitsOn,
  setLowest8bits,
  clearEveryOtherBit,
  constructMasks
} from "/src";

describe("isEither2LowestBitsOn", () => {
  it("should return true if either 2 of the lowest bit is on", () => {
    expect(isEither2LowestBitsOn(0b1010)).toBe(true);
    expect(isEither2LowestBitsOn(0b1111)).toBe(true);
  });
  it("should return false if none of the lowest 2 bits is on", () => {
    expect(isEither2LowestBitsOn(0b1000)).toBe(false);
  });
});

describe("isBoth2LowestBitsOn", () => {
  it("should return true if both 2 of the lowest bit is on and return false if otherwise.", () => {
    expect(isBoth2LowestBitsOn(0b1010)).toBe(false);
    expect(isBoth2LowestBitsOn(0b1111)).toBe(true);
  });
});

describe("setLowest8bits", () => {
  it("should set the lowest 8 bits of a bitvector.", () => {
    expect(setLowest8bits(0x0000)).toBe(0x00ff);
    expect(setLowest8bits(0xffff)).toBe(0xffff);
  });
});

describe("clearEveryOtherBit", () => {
  it("should clear every other bit of a bitvector.", () => {
    expect(clearEveryOtherBit(0b11111111)).toBe(0b10101010);
  });
});

describe("constructMasks", () => {
  it("should construct the required masks.", () => {
    expect(constructMasks(4, 4)).toEqual([
      0xffff,
      0x0010,
      0x000f,
      0x8000 /** , 0xFF00 */
    ]);
  });
});
