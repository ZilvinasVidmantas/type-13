let brand1 = 'audi';
let brand2 = 'Audi';
let brand3 = 'AUDI';

const car = {
  brand: 'audi',
  model: 'a6',
}

if (brand3.toLocaleLowerCase() === car.brand.toLocaleLowerCase()) {
  console.log('yra audi');
}