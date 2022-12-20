const numbers = [1, -2, 2, 13, 7, 3, 4, 5];

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
}

const max2 = numbers.reduce((prevMax, num) => num > prevMax ? num : prevMax);
const max3 = Math.max(...numbers);
console.log({
  max,
  max2,
  max3,
})

