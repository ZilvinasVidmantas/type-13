// finding all element indexes;
const numbers = [2, 4, -7, 2, 5, 3, 6, 1, 2, 8, 4, -9, 2, 3, 4, 5, 3, 1];

const indexesOfNumber3 = [];
let index = -1;
do {
  index = numbers.indexOf(3, index + 1);
  if (index === -1) {
    break;
  }
  indexesOfNumber3.push(index);
} while (true);

console.log(indexesOfNumber3);

// Splice insert example
const foundElementIndex = 3;
const arr = [1, 5, 3, 4, 8, 9];
arr.splice(foundElementIndex + 1, 0, 777)
console.log(arr);