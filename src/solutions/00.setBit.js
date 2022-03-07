/**
 * Set the `n`th bit of |x|.
 * @example
 * // returns 0b0010
 * setBit(0b0000, 1)
 * @param {number} x
 * @param {number} n
 */
export const setBit = (x, n) => {
  // We need a helper number
  // whose nth bit is `1` and all other bits are `0`.
  // We can get such a number by left shifting `1` `n` times.
  const a = 1 << n;
  return x | a;
};
