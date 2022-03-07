/**
 * Toggle the `n`th bit of |x|.
 * @example
 * // returns 0b0000
 * toggleBit(0b0010, 1)
 *  * @example
 * // returns 0b0010
 * toggleBit(0b0000, 1)
 * @param {number} x
 * @param {number} n
 */
export const toggleBit = (x, n) => {
  // We already know how to manipulate a given bit.
  // Now we need to achieve this:
  // 1 -> 0
  // 0 -> 1
  // We need `^` operator.
  // For the given bit, we need to toggle it:
  // 1 ^ 1 -> 0
  // 0 ^ 1 -> 1
  // For every other bits, we need to reserve it:
  // 1 ^ 0 -> 1
  // 0 ^ 0 -> 0
  // So we need a number whose `n`th bit is 1 and all other bits are 0.
  const a = 1 << n;
  return x ^ a;
};
