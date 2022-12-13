const items = [
  { price: 20, count: 7 },
  { price: 15, count: 2 },
  { price: 11, count: 3 },
  { price: 8, count: 4 },
  { price: 2, count: 16 },
];

let sum = 0;
for (let i = 0; i < items.length; i++) {
  const item = items[i];
  sum += item.price * item.count;
}

const sum2 = items.reduce((prevSum, { price, count }) => prevSum + price * count, 0);

console.log({
  sum,
  sum2,
});