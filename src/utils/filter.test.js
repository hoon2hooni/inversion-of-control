import { describe, it, expect } from "vitest";
import filter from "./filter";
describe("filter", () => {
  it("should return an array", () => {
    const result = filter(
      [1, 2, 3, null, undefined],
      (el) => el !== null && el !== undefined
    );
    expect(result).toEqual([1, 2, 3]);
  });

  it("should return an array", () => {
    const result = filter(
      [1, 2, 3, null, undefined, ""],
      (el) => el !== null && el !== undefined && el !== ""
    );
    expect(result).toEqual([1, 2, 3]);
  });
});
