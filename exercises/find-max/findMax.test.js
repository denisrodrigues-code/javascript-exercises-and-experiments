const findMax = require("./findMax");

describe("Find Max", () => {

  test("positive numbers", () => {
    expect(findMax([1,2,3])).toBe(3);
  });

  test("negative numbers", () => {
    expect(findMax([-10,-5,-1])).toBe(-1);
  });

  test("mixed numbers", () => {
    expect(findMax([-10,5,0])).toBe(5);
  });

});