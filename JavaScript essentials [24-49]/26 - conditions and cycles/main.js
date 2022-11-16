/*
  Turime indą, kuris negali viršyti 5kg svorio.
  Dėdė Aldonas pateiks jums 3 daiktus su svoriais.

  Patikrinkite, ar šių daiktų bendras svoris neviršyja leistinos indo svorio ribos.
*/
{
  // const WEIGHT_LIMIT = 5000;

  // // ↓↓ Šie duomenys turėtų ateiti iš išores(įvesties laukai, duomenų bazės įrašai ir t.t.) ↓↓
  // const item1Weight = 1500;
  // const item2Weight = 1000;
  // const item3Weight = 2000;
  // // ↑↑ Šie duomenys turėtų ateiti iš išores(įvesties laukai, duomenų bazės įrašai ir t.t.) ↑↑

  // if (item1Weight + item2Weight + item3Weight <= WEIGHT_LIMIT) {
  //   console.log('Svoris leistinas');
  // } else {
  //   console.log('Viršytas svorio limitas');
  // }
}

/*
  Papildomai parašykite logiką, kuri pasakytų, kiek reikėtų tokių indų, kad sutalpinti daiktus.
  TODO: P.S.: žinoma jog vienas daiktas niekada neviršys 5000g.
*/

{
  const WEIGHT_LIMIT = 5000;

  // ↓↓ Šie duomenys turėtų ateiti iš išores(įvesties laukai, duomenų bazės įrašai ir t.t.) ↓↓
  const item1Weight = 3000;
  const item2Weight = 3000;
  const item3Weight = 3000;
  // ↑↑ Šie duomenys turėtų ateiti iš išores(įvesties laukai, duomenų bazės įrašai ir t.t.) ↑↑

  console.log({
    item1Weight,
    item2Weight,
    item3Weight,
  });

  if (item1Weight + item2Weight + item3Weight <= WEIGHT_LIMIT) {
    console.log('Svoris leistinas');
  } else {
    console.log('Viršytas svorio limitas');
  }
}

