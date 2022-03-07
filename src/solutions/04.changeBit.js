import { setBit } from "./00.setBit";
import { clearBit } from "./01.clearBit";

/**
 * Change the `n`th bit of |x| to |val|.
 * @example
 * // returns 0b0010
 * changeBit(0b0000, 1, 1)
 * @example
 * // returns 0b0000
 * changeBit(0b1000, 3, 0)
 * @param {number} x
 * @param {number} n
 * @param {number} val
 */
export const changeBit = (x, n, val) => {
  // Solution 1
  // There is an easy way to solve this.
  // If |val| is 0, we clear the bit.
  // If |val| is 1, we set the bit.
  // return val === 0 ? clearBit(x, n) : setBit(x, n);

  // Solution 2
  const a = ((~val + 1) ^ x) & (1 << n);
  return x ^ a;
};
