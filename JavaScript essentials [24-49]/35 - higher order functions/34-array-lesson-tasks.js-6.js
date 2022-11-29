const numbersData = [2, 4, -7, 2, 5, 6, 1, 2, 8, 4, -9, 2, 4, 5, 2];
//                   0         3           7            11       14        

console.group('6. Sukurkite funkciją, kuri prieš kiekvieną dvejetą įdėtų 777');
{
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice

  const insert777Before2 = (arr) => {
    const array = arr.slice();
    let indexOf2 = -2;

    do {
      indexOf2 = array.indexOf(2, indexOf2 + 2);
      if (indexOf2 < 0) break;
      array.splice(indexOf2, 0, 777);
    } while (true);

    return array;
  }

  console.log('before:', numbersData);
  const prepended777Before2 = insert777Before2(numbersData);
  console.log('after:', prepended777Before2);

}
console.groupEnd();