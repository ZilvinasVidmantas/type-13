console.log('vaziuojam');

function double(number) {
  return number * 2;
}

function printRed(text) {
  console.log(`%c${text}`, 'color: red; font-size: 30px;');

  /* return undefined */ 
}

printRed('mano šortai')
printRed('buvo 2')
printRed('Nieko gero')
printRed('nerandu')