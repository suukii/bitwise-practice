/**
 * Test if |x| has either of 2 lowest bits on.
 * @example
 * // returns true
 * isEither2LowestBitsOn(0b1010)
 * @example
 * // returns true
 * isEither2LowestBitsOn(0b1111)
 * @example
 * // returns false
 * isEither2LowestBitsOn(0b1100)
 * @param {number} x
 */
export const isEither2LowestBitsOn = (x) => {
  return !!(x & 0x3);
};

/**
 * Test if |x| has both of 2 lowest bits on.
 * @example
 * // returns false
 * isBoth2LowestBitsOn(0b1010)
 * @example
 * // returns true
 * isBoth2LowestBitsOn(0b1111)
 * @example
 * // returns false
 * isBoth2LowestBitsOn(0b1100)
 * @param {number} x
 */
export const isBoth2LowestBitsOn = (x) => {
  return (x & 0x3) === 0x3;
};

/**
 * Set lowest 8 bits of |x|.
 * @example
 * // returns 0x00FF
 * setLowest8bits(0x0000)
 * @example
 * // returns 0xFFFF
 * setLowest8bits(0xFFFF)
 * @param {number} x
 */
export const setLowest8bits = (x) => {
  return x | 0x00ff;
};

/**
 * Clear every other bit of |x|.
 * @example
 * // returns 0b10101010
 * clearEveryOtherBit(0b11111111)
 * @param {number} x
 */
export const clearEveryOtherBit = (x) => {
  return x & 0xaaaaaaaa;
  // or x & 0x55555555
};

/**
 * Construct each of the following masks for a 16-bit unsigned integer.
 * Return them in an array.
 * 0 - all bits on
 * 1 - one bit on in position n, all others off
 * 2 - n least significant bits on, all others off
 * 3 - most significant bit on, all others off
 * 4 - k most significant bits on, all others off
 * @example
 * // returns [0xFFFF, 0x0010, 0x000F, 0x8000, 0xFF00]
 * constructMasks(4, 4)
 */
export const constructMasks = (n, k) => {
  const a = 0xffff; // ~0 or -1
  const b = 1 << n;
  const c = (1 << n) - 1;
  const d = 1 << 15;
  // const e = 0xFFFF << (16 - k); // maybe there's no way to do it in JS
  return [a, b, c, d];
};
