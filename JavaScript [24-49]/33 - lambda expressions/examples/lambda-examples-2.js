const add = function (a, b) {
  return a + b;
}

const add2 = (a, b) =>  /* return */ a + b;

console.group('Naudojant funkcija');
{
  console.log(add(2, 7))
  console.log(add(3, 4))
}
console.groupEnd();

console.group('Naudojant arrow funkcija');
{
  console.log(add2(2, 7))
  console.log(add2(3, 4))
}
console.groupEnd();

const printRed = (text) => console.log(`%c${text}`, 'color: red;');

printRed('labas')
printRed('vakaras')
