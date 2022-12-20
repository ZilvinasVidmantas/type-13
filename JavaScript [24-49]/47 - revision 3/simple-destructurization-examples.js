
const people = [
  { name: 'Jack', surname: 'Zvanok' },
  { name: 'Virgol', surname: 'Valory' },
  { name: 'Smydr', surname: 'Kosmar' },
  { name: 'Fauzi', surname: 'Bubam' },
  { name: 'Geban', surname: 'Jaban' },
];

// const [{ name, surname }] = people;
const name = people[0].name;
const surname = people[0].surname;

console.log(name, surname);

const printFullName = ({ name, surname }) => {
  console.log(name, surname)
};

people.forEach(printFullName);
