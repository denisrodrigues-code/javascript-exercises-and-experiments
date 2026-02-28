const countVowels = require("./countVowels");

describe("Count vowels", () => {

  test("count hello", () => {
    expect(countVowels("hello")).toBe(2);
  });

  test("uppercase", () => {
    expect(countVowels("AEIOU")).toBe(5);
  });

  test("no vowels", () => {
    expect(countVowels("rhythm")).toBe(0);
  });

});