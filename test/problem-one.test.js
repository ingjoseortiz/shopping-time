const { getMissingValues } = require("../src/problem-one");

describe("Problem 1 test", () => {
  const array1 = [4, 3, 2, 7, 8, 2, 3, 1]; // Array 1 - Problem 1
  const array2 = [1, 1]; // Array 2 - Problem 1

  test("check if argument is an array", () => {
    expect(Array.isArray(array1)).toBeTruthy();
    expect(Array.isArray(array2)).toBeTruthy();
  });

  test("Check if arrays has only numbers", () => {
    expect(!array1.some(isNaN)).toBeTruthy();
    expect(!array2.some(isNaN)).toBeTruthy();
  });

  test("check for not matching values between arrays", () => {
    //throw new Error("Something has failed");

    expect(array1).not.toEqual(getMissingValues(array1));
    expect(array2).not.toEqual(getMissingValues(array2));
    //expect(array3).not.toEqual(getMissingValues(array1));
  });
  test("Array not to be null", () => {
    expect(array1).not.toBeNull();
    expect(array2).not.toBeNull();
  });
});
