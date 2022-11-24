const numbers = [4, 5, 6];

function sumReducer(prevSum, number, i, arr) {
  console.log({ prevSum, number, i, arr });
  return prevSum + number;
}

const sum = numbers.reduce(sumReducer);
console.log(sum);

const items = [
  { title: 'spinta', weight: 60 },
  { title: 'keda', weight: 20 },
  { title: 'butelis', weight: 80 },
];

function weightSumReducer(prevSum, item, i, arr) {
  console.log({ prevSum, item, i, arr });
  return prevSum + item.weight;
}

const itemWeightSum = items.reduce(weightSumReducer, 0);
console.log(itemWeightSum);