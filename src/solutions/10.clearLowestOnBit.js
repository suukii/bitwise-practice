/**
 * Clear the lowest "on" bit of |x|.
 * @example
 * // returns 0b0010
 * clearLowestOnBit(0b0011)
 * @example
 * // returns 0b0000
 * clearLowestOnBit(0b1000)
 * @param {number} x
 */
export const clearLowestOnBit = (x) => {
  // x    0b1000
  // x-1  0b0111
  // &    0b0000
  return x & (x - 1);
};
