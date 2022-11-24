const flats = [{
  address: 'Vilnakiemio g. 7',
  rooms: [
    { title: 'virtuvė', area: 12 },
    { title: 'svetainė', area: 20 },
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 16 },
  ],
  city: 'Vilnius',
  price: 120000
}, {
  address: 'Ruginių pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'svetainė', area: 18 },
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 120000
}, {
  address: 'Valatkų pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 120000
}, {
  address: 'Vareikų pr. 17',
  rooms: [
    { title: 'virtuvė', area: 18 },
    { title: 'svetainė', area: 18 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 90000
}, {
  address: 'Majonezo pr. 17',
  rooms: [
    { title: 'tualetas', area: 8 },
    { title: 'miegamasis', area: 12 },
    { title: 'miegamasis2', area: 16 },
  ],
  city: 'Kaunas',
  price: 50000
}, {
  address: 'Saulės g. 7',
  rooms: [
    { title: 'virtuvė', area: 12 },
    { title: 'svetainė', area: 20 },
    { title: 'tualetas', area: 8 },
  ],
  city: 'Klaipėda',
  price: 80000
}];

// ------------------------------ Be anoniminių funkcijų ---------------------
console.group('1. Atspausdinkite kiekvieno buto adresą su miestu');
// '<address>, <city>'
{
  function printFullAdress({ address, city }) {
    console.log(`${address}, ${city}`);
  }

  flats.forEach(printFullAdress);
}
console.groupEnd();

console.group('2. Sukurkite masyvą iš butų kamarių skaičiaus');
// [4, 5, 3, 3, 3, 3]
{
  function getFlatRoomCount({ rooms }) {
    return rooms.length;
  }

  const flatsRoomCount = flats.map(getFlatRoomCount);
  console.log(flatsRoomCount);
}
console.groupEnd();

console.group('3. Suformuokite butų plotų masyvą');
{
  function roomAreaReducer(prevArea, { area }) {
    return prevArea + area;
  }

  function getFlatArea({ rooms }) {
    const flatArea = rooms.reduce(roomAreaReducer, 0);

    return flatArea;
  }

  const flatsAreas = flats.map(getFlatArea);
  console.log(flatsAreas);
}
console.groupEnd();

// ------------------------------ Su anoniminėmis funkcijomis ---------------------
console.group('4. Atrinkite 4 kambarių ir dedesnius butus');
// [{...}, {...}]
{
}
console.groupEnd();

console.group('5. Apskaičiuokite visų butų bendrą plotą');
{
}
console.groupEnd();

console.group('6. Atrinkite 3 kambarių butus iš Kauno, kurių kaina mažesnė nei 100 000');
{

}
console.groupEnd();

console.group('7. Perforkuokite butus formatu pateiktu komentaruose');
/*
  Masyvas sudarytas iš
  {
    address: string (`<address>, <city>`),
    city: string,
    price: number (1.1 * <price>).
    roomCount: number,
    squares: number,
    squarePrice: number,
  }
*/
{

}
console.groupEnd();
