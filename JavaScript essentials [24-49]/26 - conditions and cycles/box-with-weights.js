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
*/
{
  const WEIGHT_LIMIT = 5000;

  // ↓↓ Šie duomenys turėtų ateiti iš išores(įvesties laukai, duomenų bazės įrašai ir t.t.) ↓↓
  const item1Weight = 5001;
  const item2Weight = 2502;
  const item3Weight = 2499;
  // ↑↑ Šie duomenys turėtų ateiti iš išores(įvesties laukai, duomenų bazės įrašai ir t.t.) ↑↑

  console.log({
    item1Weight,
    item2Weight,
    item3Weight,
  });
  
  if (item1Weight > WEIGHT_LIMIT || item2Weight > WEIGHT_LIMIT || item3Weight > WEIGHT_LIMIT) {
    console.log('Duomenų imtyje yra daiktų viršijančių indo svorio limitą. Sprendinių nėra.')
  } else if (item1Weight + item2Weight + item3Weight <= WEIGHT_LIMIT) {
    console.log('Svoris leistinas');
  } else {
    // let containerCount;
    const firstAndSecondItemFitsInContainer = item1Weight + item2Weight <= WEIGHT_LIMIT;
    const firstAndThirdItemFitsInContainer = item1Weight + item3Weight <= WEIGHT_LIMIT;
    const secondtAndThirdItemFitsInContainer = item2Weight + item3Weight <= WEIGHT_LIMIT;

    if (
      firstAndSecondItemFitsInContainer ||
      firstAndThirdItemFitsInContainer ||
      secondtAndThirdItemFitsInContainer) {
      containerCount = 2;
    } else {
      containerCount = 3;
    }

    console.error('Viršytas svorio limitas');
    console.error(`Reikės ${containerCount} indų, kad sutalpinti daiktus :(`);
  }
}

