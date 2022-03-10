/**
 * Write a function setbits(x,p,n,y) that returns x with the n bits
 * that begin at position p set to the rightmost n bits of y,
 * leaving the other bits unchanged.
 * @example
 * // returns 0b0010110011110001
 * setBits(0b0010010111110001, 8, 4, 0b0000110110101100)
 */
export const setBits = (x, p, n, y) => {
  // Get the rightmost n bits of y.
  // e.g. n = 3
  // (~0 << n) gives us 11..11000
  // do a |~| operation on it and we get
  // y & 00..00111 gives us the rightmost 3 bits of y.
  let a = y & ~(~0 << n);

  // Put these bits in the right place. i.e. at position [p+n, p]
  a <<= p;

  // To set a bit to the given value we need to achieve this:
  // 0 ? 0 -> 0
  // 0 ? 1 -> 0
  // 1 ? 0 -> 1
  // 1 ? 1 -> 1
  // Obviously no operator can do this.
  // So we need to clear bits from x in the range of [p+n, p] first.
  // We need to do (x & 11..000..11), and how can we get 11..000..11?
  // We mentioned above that (~(~0 << n)) gave us 00..00111.
  // Just right shift it and do a |~| operation we can get 11..000..11.
  const b = ~(~(~0 << n) << p);

  // Do a |&| operation to clear the bits in the range [p+n, p]
  x = x & b;

  // Set bits from p through p+n in x to a.
  return x | a;
};
