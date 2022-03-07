/**
 * Clear the `n`th bit of |x|.
 * @example
 * // returns 0b0000
 * clearBit(0b0010, 1)
 * @param {number} x
 * @param {number} n
 */
export const clearBit = (x, n) => {
  // We need a number whose `n`th bit is 0 and all other bits are 1.
  // e.g. When `n` is 1, we need `1101`.
  // We already know how to get a number whose `n`th bit is 1 and all other bits are 0.
  // We can just flip every bit to get what we need.
  const a = ~(1 << n);
  return x & a;
};
