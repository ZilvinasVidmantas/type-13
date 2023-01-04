/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratim1 perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tiek pat svarbus, kiek sprendimas.
*/

// 10 min
console.groupCollapsed('1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis');
{
  // Funkcijos deklaravimas
  const printCapitalized = (text: string): void => {
    const wordCapitalized = text.toUpperCase();
    console.log(wordCapitalized);
  };

  console.log('abcd:');
  printCapitalized('abcd');
  console.log('AAAA:');
  printCapitalized('AAAA');
  console.log('aBcD:');
  printCapitalized('aBcD');
}
console.groupEnd();

// 10 min
console.groupCollapsed('2. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių');
{
  const caclStringCombinedLength = (a: string, b: string): number => a.length + b.length;

  console.table({
    'labas, abc': caclStringCombinedLength('labas', 'abc'),
    'kranas, jonas': caclStringCombinedLength('kranas', 'jonas'),
    'kebabas, kefyras': caclStringCombinedLength('kebabas', 'kefyras'),
  });
}
console.groupEnd();

// 10 min
console.groupCollapsed('3. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false');
{
  const containsLetter = (str: string, letter: string): boolean => str.includes(letter);

  console.log({
    'labas, a': containsLetter('labas', 'a'),
    'kempė, a': containsLetter('kempė', 'a'),
    'Finakolė, u': containsLetter('Finakolė', 'u'),
  });
}
console.groupEnd();

// 10 min
console.groupCollapsed('4. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių');
{
  const isEvenNumberOfLetters = (str: string): boolean => str.length % 2 === 0;

  console.table({
    labas: isEvenNumberOfLetters('labas'),
    kempės: isEvenNumberOfLetters('kempės'),
    123123: isEvenNumberOfLetters('123123'),
  });
}
console.groupEnd();

// 15 min
console.groupCollapsed('5. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje');
{
  const countVowelCount = (str: string): number => str.match(/[aeiouyąęėįųū]/g)?.length ?? 0;

  console.log({
    aaaaa: countVowelCount('aaaaa'),
    sasasasa: countVowelCount('sasasasa'),
    aeyuioąčė: countVowelCount('aeyuioąčė'),
  });
}
console.groupEnd();

// 15 min
console.groupCollapsed('6. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje');
{
  const countLetters = (str: string, searchLetter: string): number => {
    const searchLetterRegex = new RegExp(searchLetter, 'g');

    return str.match(searchLetterRegex)?.length ?? 0;
  };
  console.table({
    'labas, a': countLetters('labas', 'a'),
    'kempės, k': countLetters('kempės', 'k'),
    '123123, z': countLetters('123123', 'z'),
  });
}
console.groupEnd();

// 15 min
console.groupCollapsed('7. Sukurkite funkciją, kuri ištrintų pirmą surastą simbolį žodyje ir grąžintų pakeistą žodį');
{
  const removeLetter = (str: string, letter: string): string => str.replace(letter, '');

  console.log({
    labas: removeLetter('labas', 'b'),
    kempiniukas: removeLetter('kempiniukas', 's'),
    123123: removeLetter('123123', 'a'),
  });
}
console.groupEnd();

// 20 min
//  8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.group('8. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.');
{
  const removeLetters = (word: string, letters: string[]): string => word
    .split('')
    .filter((wordLetter) => !letters.includes(wordLetter))
    .join('');

  console.table({
    'labas, [a, b]': removeLetters('labas', ['a', 'b']), // 'ls'
    'kempiniukas, [e, m, p, k]': removeLetters('kempiniukas', ['e', 'm', 'p', 'k']), // 'iniuas'
    '123123, []': removeLetters('123123', []), // '123123'
  });
}
console.groupEnd();

// 60 min
// 9. Sukurkite funkciją, kuri taiso teksto klaidas, pagal tokius reikalavimus:
//  * Pirma sakinio raidė didžioji.
//  * Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  * Bet koks kiekis tarpų pakeičiamas vienu tarpu
//  * Pašalinti tarpus aplink visą tekstą
console.groupCollapsed('9. Sukurkite funkciją, kuri taiso pastraipos klaidas');
{
  const capitalizeFirstLetter = (word: string): string => word[0].toUpperCase() + word.slice(1);

  const fixParagraph = (paragraph: string): string => paragraph
    .split(/([.?!])/)
    .slice(0, -1)
    .map((sentence) => sentence.trim())
    .map(capitalizeFirstLetter)
    .join('')
    .replaceAll(/\s+/g, ' ')
    .replaceAll(' ,', ',')
    .replaceAll(/([.?!,])([^\s])/g, '$1 $2');

  const paragraph = '    labas , as jonas     . Tave      vadina Kęstu         ,taip? Taip ir žinojau  !';
  const fixedParagraph = fixParagraph(paragraph);
  console.log(paragraph);
  console.log(fixedParagraph);
}
console.groupEnd();
