console.group("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeFirstLetterA(str) {
    let result = '';
    let letterNotFound = true;
    for (let i = 0; i < str.length; i++) {
      if (letterNotFound && str[i] === 'a') {
        letterNotFound = false;
      } else {
        result += str[i];
      }
    }
    return result;
  }

  function removeFirstLetterA(str) {
    return str.replace('a', '');
  }

  console.table({
    'labas': removeFirstLetterA('labas'),
    'kempiniukas': removeFirstLetterA('kempiniukas'),
    '123123': removeFirstLetterA('123123'),
  })
}
console.groupEnd();
console.log();