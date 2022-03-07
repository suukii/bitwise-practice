import { hasSameSign } from "/src";

describe("hasSameSign", () => {
  it("should determine whether two numbers have the same sign.", () => {
    expect(hasSameSign(1, 2)).toBe(true);
    expect(hasSameSign(1, -2)).toBe(false);
    expect(hasSameSign(-1, -2)).toBe(true);
  });
});
