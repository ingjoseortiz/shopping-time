//This function is for sum each each position to the next one to add up to target
const sumArrayElements = (array, target) => {
  // Emtpy array to push missing numbers
  const sumArray = [];
  //loop to get into arrays position and sum current value to the next on next position
  for (let i = 0; i <= array.length; i++) {
    const sum = array[i] + array[i + 1];
    //if sum === to target true, positions of each value in array,
    // will be pushed into another array
    if (sum === target) {
      sumArray.push(
        array.indexOf(array[i]),
        array[i] === array[i + 1]
          ? array.indexOf(array[i]) + 1
          : array.indexOf(array[i + 1])
        //here was the difficult part, beacuse when i was looking for the value to get the position in array,
        //the value was the same in both positions [3, 3]
        //so when i was looking for the position of the second item,
        //it was showing the position 0 of the first item.
        //the solution was checking if the sum of each positions was identicaly,
        //just jump into next position
      );
      console.log("Problem two results: ", sumArray);
      return sumArray;
    }
  }
};

exports.sumArrayElements = sumArrayElements;
