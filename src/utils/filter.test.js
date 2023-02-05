import { describe, it, expect } from "vitest";
import {
  filterNullAndUndefined,
  filterNullAndUndefinedAndEmptyString,
} from "./filter";
describe("filter", () => {
  it("should return an array", () => {
    const result = filterNullAndUndefined([1, 2, 3, null, undefined]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("should return an array", () => {
    const result = filterNullAndUndefinedAndEmptyString([
      1,
      2,
      3,
      null,
      undefined,
      "",
    ]);
    expect(result).toEqual([1, 2, 3]);
  });
});
