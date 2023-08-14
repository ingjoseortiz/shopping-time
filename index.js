const { getMissingValues } = require("./src/problem-one");
const { sumArrayElements } = require("./src/problem-two");

///Problem 1 values:
const array1 = [4, 3, 2, 7, 8, 2, 3, 1];
const array2 = [1, 1];

getMissingValues(array1);
getMissingValues(array2);

///Problem 2 values:
const arrayA = [2, 7, 11, 15];
const targetA = 9;

const arrayB = [3, 2, 4];
const arrayC = [3, 3];
const targetB = 6;

sumArrayElements(arrayA, targetA);
sumArrayElements(arrayB, targetB);
sumArrayElements(arrayC, targetB);

//Both probles Time and Space Complexity

// Time Complexity: O(n)
// Space Complexity: O(m)
