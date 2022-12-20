// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

// Jeigu reikia kaupti/formuoti reikšmę su kiekvienu masyvo elementu, naudojama metodologija:
// 1. padeklaruojamas pradinis elementas
// 2. Pradedamas ciklas
//  2.1 Kiekviena iteracija papildo/keičia padeklaruotą kintamajį [1.]
// 3. atliekamas galutinis formavimas
// 4. grąžinama/spausdinama reikšmė 

{
  // 1.
  let sum = 0;
  // 2.
  for (let i = 0; i < numbers.length; i += 1) {
    // 2.1
    sum += numbers[i];
  }
  // 3. - NEREIKĖJO
  // 4.
  console.log(sum);
}

{
  function arr2String(numbers) {
    // 1.
    let arrStr = '[';
    // 2.
    for (let i = 0; i < numbers.length; i += 1) {
      // 2.1
      arrStr += numbers[i] + ', ';
    }
    // 3. 
    arrStr = arrStr.slice(0, -2);
    // 4.
    return arrStr + ']';
  }

  console.table({
    'arr2String([1, 2, 3])': arr2String([1, 2, 3]),
    'arr2String([1, 2, 3, 4, 5])': arr2String([1, 2, 3, 4, 5]),
    'arr2String([-1,  55])': arr2String([-1, 55]),
  })
}


console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    // ... code
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    // ... code
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const resultArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      resultArr[i] = arr[i] * i;
      // result.push(arr[i] * i);
    }

    return resultArr;
  }

  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterPositives(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterNegatives(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterEquals(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterOdds(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  // function arrAbsoluteValues(arr) {
  //   const resultArr = [];
  //   for (let i = 0; i < arr.length; i += 1) {
  //     let element = arr[i];
  //     if (element < 0) element *= -1;

  //     resultArr.push(element);
  //   }

  //   return resultArr;
  // }

  // function arrAbsoluteValues(arr) {
  //   const resultArr = [];
  //   for (let i = 0; i < arr.length; i += 1) {
  //     let element = arr[i] < 0 ? arr[i] * -1: arr[i];

  //     resultArr.push(element);
  //   }

  //   return resultArr;
  // }

  // function arrAbsoluteValues(arr) {
  //   const resultArr = [];
  //   for (let i = 0; i < arr.length; i += 1) {
  //     resultArr.push(arr[i] < 0 ? arr[i] * -1: arr[i]);
  //   }

  //   return resultArr;
  // }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: powArrElementsByIndex(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterNaturals(numbers)
  // });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    // Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: absArrElements(numbers)
  // });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    //  Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterEverySecond(numbers)
  // });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    //  Jūsų kodas
  }
  // console.log({
  //   numbers,
  //   result: filterEveryFifth(numbers)
  // });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    // ... code
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    // Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: sumArr(numbers)
  // });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    // Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: avgArr(numbers)
  // });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    //  Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: arrMax(numbers)
  // });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    //  Jūsų kodas
  }

  // console.log({
  //   numbers,
  //   result: arrMin(numbers)
  // });
}
console.log('---');
console.groupEnd();
