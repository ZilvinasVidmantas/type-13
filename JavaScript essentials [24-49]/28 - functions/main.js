const numbers = [5, 3, -5, -9, 4, 6, 5, 1, 12, 2];

function numericASC (number1, number2) {
  if(number1 > number2) return 1;
  if(number2 > number1) return -1;

  return 0;
}

function numericDESC(number1, number2) {
  if(number1 > number2) return -1;
  if(number2 > number1) return 1;
  
  return 0;
}

const sortedNumbersASC = Array.from(numbers).sort(numericASC);
const sortedNumbersDESC = Array.from(numbers).sort(numericDESC);

console.log(sortedNumbersASC);
console.log(sortedNumbersDESC);
