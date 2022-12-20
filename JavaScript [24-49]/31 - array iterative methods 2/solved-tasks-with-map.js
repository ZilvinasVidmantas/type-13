const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];

const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];

console.group('1. Sukurkite funkciją kuri performuotų asmens objektą į vardo ir pavardės string`ą. Panaudokite Array.prototype.map, kad sukurti naują masyvą panaudojant šią funkciją.');
function getPersonFullname(person) {
  return `${person.name} ${person.surname}`;
}

const fullnames = people.map(getPersonFullname);
console.table(fullnames);

console.groupEnd();
console.log('---');

console.group('2. Sukurkite funkciją kuri performuotų asmens objektą į amžių. Panaudokite Array.prototype.map, kad sukurti naują masyvą panaudojant šią funkciją.');
function getPersonAge(person) {
  return person.age;
}

const ages = people.map(getPersonAge);
console.table(ages);
console.groupEnd();
console.log('---');

console.group('3. Sukurkite funkciją kuri padalintų skaičių iš 4. Panaudokite Array.prototype.map, kad sukurti naują masyvą panaudojant šią funkciją.');
function divideBy4(number) {
  return number / 4;
}

const numbersDividerBy4 = numbers.map(divideBy4);
console.table(numbersDividerBy4);
console.groupEnd();
console.log('---');
