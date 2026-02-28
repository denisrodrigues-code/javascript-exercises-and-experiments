const reverseString = require("./reverseString");

describe("Reverse String", () => {

  test("reverse abc", () => {
    expect(reverseString("abc")).toBe("cba");
  });

  test("reverse word", () => {
    expect(reverseString("javascript")).toBe("tpircsavaj");
  });

});