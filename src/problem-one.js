//We need to check for what numbers are missing in array
//expecting to have values from number 1 to its length
const getMissingValues = (nums) => {
  //Emtpy array to push missing numbers
  let results = [];
  //iterate each position to find which value is missing
  //if not missing number has found, it does nothing and keep searching
  nums.map((index, key) => {
    nums.includes(key + 1) ? null : results.push(key + 1);
  });

  console.log("Problem one results: ", results);
  return results;
};

exports.getMissingValues = getMissingValues;
