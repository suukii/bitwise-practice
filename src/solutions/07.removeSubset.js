/**
 * Remove bit vector b from a.
 * @example
 * // returns 0b1000
 * removeSubset(0b1010, 0b0111)
 * @example
 * // returns 0b1010
 * removeSubset(0b1111, 0b0101)
 * @param {number} a
 * @param {number} b
 */
export const removeSubset = (a, b) => {
  // // Solution 1
  // // find intersect first
  // const t = a & b;
  // // t[i] ? a[i]
  // // 1 ? 1 -> 0
  // // 0 ? 0 -> 0
  // // 0 ? 1 -> 1
  // // ^
  // return a ^ t;

  // Solution 2
  return a & ~b;
};
