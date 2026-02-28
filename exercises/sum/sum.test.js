const sum = require("./sum");

describe("Sum", () => {

  test("adds two numbers", () => {
    expect(sum(2,3)).toBe(5);
  });

  test("works with negatives", () => {
    expect(sum(-5,2)).toBe(-3);
  });

});