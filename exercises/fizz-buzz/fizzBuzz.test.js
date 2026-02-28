const fizzBuzz = require("./fizzBuzz");

describe("FizzBuzz", () => {

  test("multiple of 3", () => {
    expect(fizzBuzz(6)).toBe("Fizz");
  });

  test("multiple of 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  test("multiple of both", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  test("normal number", () => {
    expect(fizzBuzz(7)).toBe(7);
  });

});