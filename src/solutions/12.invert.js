/**
 * Write a function invert(x,p,n) that returns x with the n bits
 * that begin at position p inverted (i.e., 1 changed into 0 and vice versa),
 * leaving the others unchanged.
 * @example
 * // returns 0b0010101011110001
 * invert(0b0010010111110001, 8, 4)
 */
export const invert = (x, p, n) => {
  // Use the |^| operator to achieve inversion.
  // 1 ^ 1 = 0
  // 1 ^ 0 = 1
  // Say p=2, n=3, we need 00..0011100
  const a = ~(~0 << n) << p; // This is explained in 11.setBits.js
  return x ^ a;
};
