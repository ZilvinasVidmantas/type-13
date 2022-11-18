// Sukūrusa funkciją, reikia įrodyti, jog ji veikia gerai skirtingais atvejais, todėlprivalote pateikti
//  mažiausiai 2 funkcijos panaudojimo pavyzdžius.

console.group('1. Parašykite funkciją, kuri atspausdintų bet kokį string"ą 2 kartus, skirtingose eilutėse');
{
  // funkcijos deklaracija
  function repeat(text) {
    console.log(text);
    console.log(text);
  }
  // bandomieji kintamiejiconst 
  const str1 = 'labas';
  const str2 = 'ate';

  // rezultatų spausdinimas 
  repeat(str1);
  repeat(str2);

}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžintų bet kokį string"ą 5 kartus, atskirtus tarpu');
{
  // funkcijos deklaracija
  function repeatFiveTimesInRow(text) {
    return `${text} ${text} ${text} ${text} ${text}`;
  }

  // bandomieji kintamiejiconst 
  const str1 = 'labas';
  const str2 = 'ate';

  // funkcijos iškvietimai ir saugojimai į rezultatus
  const res1 = repeatFiveTimesInRow(str1);
  const res2 = repeatFiveTimesInRow(str2);
  // rezultatų spausdinimas 

  console.table({ res1, res2 });
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri atspausdintų bet kokį string"ą, bet kokį kiekį kartų, askirtus tarpu - vienoje eilutėje');
{
  // funkcijos deklaracija
  function printStringNTimesInRow(text, n) {
    let result = '';

    for (let i = 0; i < n; i += 1) {
      const isLastElement = i === n - 1;

      if (isLastElement) {
        result += text;
      } else {
        result += text + ' ';
      }
    }

    console.log(result);
  }

  // bandomieji kintamieji
  const str1 = 'labas';
  const n1 = 3;
  const str2 = 'ate';
  const n2 = 2;
  const str3 = 'gyvate';
  const n3 = 7;

  // rezultatų spausdinimas
  printStringNTimesInRow(str1, n1);
  printStringNTimesInRow(str2, n2);
  printStringNTimesInRow(str3, n3);
}
console.groupEnd();
console.group('4. Parašykite funkciją, kuri atspausdintų bet kokį string"ą, bet kokį kiekį kartų, askirtus programuotojo nurodytu simboliu - vienoje eilutėje');
{
  // funkcijos deklaracija
  function printStringNTimesInRow(text, n, separator) {
    let result = '';

    for (let i = 0; i < n; i += 1) {
      const isLastElement = i === n - 1;

      result += text;
      if (!isLastElement) {
        result += separator;
      }
    }

    console.log(result);
  }

  // bandomieji kintamieji
  const str1 = 'labas';
  const n1 = 3;
  const str2 = 'ate';
  const n2 = 2;
  const str3 = 'gyvate';
  const n3 = 7;

  // rezultatų spausdinimas
  printStringNTimesInRow(str1, n1, '*');
  printStringNTimesInRow(str2, n2, '-');
  printStringNTimesInRow(str3, n3, '_');
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri grąžintų bet kokį string"ą, bet kokį kiekį kartų, skirtingose eilutėse');
{  // funkcijos deklaracija
  function printStringNTimesInRow(text, n) {
    let result = '';

    for (let i = 0; i < n; i += 1) {
      const isLastElement = i === n - 1;
      result += text + (isLastElement ? '' : '\n');
    }

    return result;
  }

  // bandomieji kintamieji
  const str1 = 'labas';
  const n1 = 3;
  const str2 = 'ate';
  const n2 = 2;
  const str3 = 'gyvate';
  const n3 = 7;

  // funkcijos iškvietimai ir saugojimai į rezultatus
  const res1 = printStringNTimesInRow(str1, n1);
  const res2 = printStringNTimesInRow(str2, n2);
  const res3 = printStringNTimesInRow(str3, n3);

  // rezultatų spausdinimas
  console.log(res1);
  console.log(res2);
  console.log(res3);
}
console.groupEnd();