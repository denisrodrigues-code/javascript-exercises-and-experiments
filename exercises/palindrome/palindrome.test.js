const isPalindrome = require("./palindrome");

describe("Palindrome", () => {

  test("valid palindrome", () => {
    expect(isPalindrome("ana")).toBe(true);
  });

  test("ignore case", () => {
    expect(isPalindrome("Ana")).toBe(true);
  });

  test("not palindrome", () => {
    expect(isPalindrome("javascript")).toBe(false);
  });

});