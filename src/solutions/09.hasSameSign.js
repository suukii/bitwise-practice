/**
 * Determine whether a and b have the same sign.
 * @example
 * // returns true
 * hasSameSign(1, 2)
 * @example
 * // returns false
 * hasSameSign(1, -2)
 * @param {number} a
 * @param {number} b
 */
export const hasSameSign = (a, b) => {
  // for sign bit:
  // 1 ^ 1 = 0
  // 0 ^ 0 = 0
  // 1 ^ 0 = 1
  return (a ^ b) > 0;
};
