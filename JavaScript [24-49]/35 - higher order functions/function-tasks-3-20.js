const letterEVariations = 'eęė';

const additionalLTChecks = {
  a: 'aą',
  i: 'iį',
  e: letterEVariations,
  ę: letterEVariations,
  ė: letterEVariations,
  u: 'uūų'
}

function indexesOfLetter(str, searchLetter) {
  const search = additionalLTChecks[searchLetter] ?? searchLetter;
  // Sukuriamas regex, pvz:
  //   * 'k'  ->  /[k]/ig  ieškoma vienas iš tarp laužtinių skliaustų esantis simbolis 
  //   * 'aą' ->  /[aą]/ig
  const letterRegex = new RegExp(`[${search}]`, 'ig');
  // Surandami visi rezultatai ir grąžinami @iterator forOf pavidalu,
  // Naudojant destruktūrizavimo sintaksę fali patalpinti iteratoriaus duomenis masyve
  const foundResults = [...str.matchAll(letterRegex)];
  console.log(foundResults);

  /*
    Kiekvieno elemento duomenys yra tokios struktūros: { 
      0: rastasElementas,
      <index>: number, 
      input: simbolių darinys kuriame buvo rastas elementas
      groups: grupės numeris, jeigu regex'e buvo naudojamas grupavimas -> ()
    }

    performuojame rezultatus į indeksų masyvą destruktūrizuodami rastos raidės <index>
  */
  const result = foundResults.map(({ index }) => index);
  return result;
}
indexesOfLetter('labas eglė ežerėlis pusę', 'e');