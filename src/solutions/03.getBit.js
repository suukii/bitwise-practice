/**
 * Get the `n`th bit of |x|.
 * @example
 * // returns 1
 * getBit(0b0010, 1)
 *  * @example
 * // returns 0
 * getBit(0b0010, 0)
 * @param {number} x
 * @param {number} n
 */
export const getBit = (x, n) => {
  // We need
  // 1 -> 1
  // 0 -> 0
  // We can get it by
  // 1 & 1 = 1
  // 0 & 1 = 0
  const a = 1 << n;
  return x & a;
};
