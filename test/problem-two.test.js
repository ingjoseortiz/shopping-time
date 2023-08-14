const { getMissingValues } = require("../src/problem-two");

describe("Problem 2 test", () => {
  const arrayA = [2, 7, 11, 15];
  const targetA = 9;

  const arrayB = [3, 2, 4];
  const arrayC = [3, 3];
  const targetB = 6;

  test("check if argument is an array", () => {
    expect(Array.isArray(arrayA)).toBeTruthy();
    expect(Array.isArray(arrayB)).toBeTruthy();
    expect(Array.isArray(arrayC)).toBeTruthy();
  });

  test("Check if arrays and target contains only numbers", () => {
    expect(!arrayA.some(isNaN)).toBeTruthy();
    expect(!arrayB.some(isNaN)).toBeTruthy();
    expect(!arrayC.some(isNaN)).toBeTruthy();
    expect(typeof targetA === "number").toBeTruthy();
    expect(typeof targetB === "number").toBeTruthy();
  });

  test("Array not to be null", () => {
    expect(arrayA).not.toBeNull();
    expect(arrayB).not.toBeNull();
    expect(arrayC).not.toBeNull();
    expect(targetA).not.toBeNull();
    expect(targetB).not.toBeNull();
  });
});
