import { describe, it, expect } from "vitest";
import { farewell } from "../index";

describe("farewell", () => {
  it("farewell a person by name", () => {
    expect(farewell("Nathan")).toBe("Goodbye Nathan!!");
  });

  it("farewell with an empty string", () => {
    expect(farewell("")).toBe("Goodbye !!");
  });
});
