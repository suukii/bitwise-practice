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
  // code here
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
  // code here
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
  // code here
};

/**
 * Clear every other bit of |x|.
 * @example
 * // returns 0b10101010
 * clearEveryOtherBit(0b11111111)
 * @param {number} x
 */
export const clearEveryOtherBit = (x) => {
  // code here
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
  // code here
};
