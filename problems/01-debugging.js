/*
Debugging

Fix the bug in the code so that the example inputs produce the expected outputs.
*/

function medianNum(sortedNums) {
  if (sortedNums.length === 0) return null;

  let midIdx = Math.floor(sortedNums.length / 2); // Middle index for odd length arrays

  if (sortedNums.length / 2 === 0) {
    // For even length arrays, return the average of the two middle numbers
    return (sortedNums[midIdx - 1] + sortedNums[midIdx]) / 2;
  } else {
    // For odd length arrays, return the middle number
    return sortedNums[midIdx];
  }
}

console.log(medianNum([1, 2, 3, 4, 5, 6])); //=> 4
console.log(medianNum([5, 8, 90]));         //=> 8
console.log(medianNum([5, 7, 8, 90]));      //=> 8
console.log(medianNum([]));                 //=> null
console.log(medianNum([3]));                //=> 3


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = medianNum;
