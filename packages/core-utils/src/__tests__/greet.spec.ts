import { describe, it, expect } from "vitest";
import { greet } from "../index";

describe("greet", () => {
  it("greets a person by name", () => {
    expect(greet("Nathan")).toBe("Hello Nathan!!");
  });

  it("works with an empty string", () => {
    expect(greet("")).toBe("Hello !!");
  });
});
