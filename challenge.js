/*
Having a list of n digits (0 <= digit <= 9), where n less than or equal to 100,
arrange it to move all 0 to right in O (n) time.

Example [4, 8, 0, 9, 2, 5, 0, 3, 3, 0] -> [4, 8, 9, 2, 5, 3, 3, 0, 0, 0]

You must display this list in the console.

After this, the previous list without zeros ([4, 8, 9, 2, 5, 3, 3]) will represent a fictitious integer (4892533).
You should add 1 unit to it, leaving the final list as [4, 8, 9, 2, 5, 3, 4]. You must display this list in the console.

Finally, multiply by -1 each digit in even position of the array without zeros.
After this, detect the sub-array, whose sum of digits is the maximum and return
this sum. Example: [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5, 8, -4, 9] -> 13. You must display the sum in the console.
 */

const list = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];
const numberString = "";
let arrayWithSum = [];

const moveZero = (list) => {
  const newArray = [...list];
  newArray.map((elem, index) => {
    if(elem === 0){
      newArray.splice(index, 1);
      newArray.push(elem);
      list.splice(index, 1);
    }
  })
  return newArray;
};

const addNumber = (list, numRep) => {
  list.map((elem, index) => {
    numRep = `${numRep}${elem}`;
  })
  
  return [...(parseInt(numRep) + 1).toString()];
  
};

const newArray = (list) => {
  for (let i = 0; i< list.length ; i++){
    if (i % 2 === 0 ){
      list[i] = list[i] * -1;
    }
  }
}

const subArraySum = (list) => {
  let maxSum = 0;
  let partialSum = 0;
  
  for (let item of list) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }
  
  return maxSum;
}

const validateContent = (list) => {
  let valid = false;
  valid = Array.isArray(list);
  if (!valid) return valid;
  list.map((element, index) =>{
    valid = typeof element == 'number';
  });
  return valid;
};

console.log(moveZero(list, numberString));
arrayWithSum = addNumber(list, numberString);
console.log(arrayWithSum);
const test = [4, 8, 9, 2, 5, 8, 4, 9];
newArray(test);
console.log(test);
console.log(subArraySum(test));
console.log(validateContent([4, 8, 9, 2, 5, 8, 4, 9]));