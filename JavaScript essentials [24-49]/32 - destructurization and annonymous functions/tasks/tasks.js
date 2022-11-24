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
    { title: 'miegamasis2', area: 19 },
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
  const printFullAdress = function ({ address, city }) {
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
  const largeFlats = flats.filter(function ({ rooms }) {
    return rooms.length >= 4;
  });

  console.table(largeFlats);
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

// Papildomai
console.group('8. Atrinkite butus, kurie turi nors vieną kambarį, didesnį nei 19 kvadratų');

console.groupEnd();

console.group('9. Apskaičiuokite visų būtų kainos vidurkį,');

console.groupEnd();

console.group('10. Apskaičiuokite visų būtų kainą už kvadratą');
// 20 - 20 000;           40 - 40 000; -> 1000
// 20 - 20 000;           20 - 40 000; -> 1500
// 20 - 20 000;           30 - 60 000;  80 000/50 -> 1600 // kvadratų kainų vidurkis
//   1000                   2000                  -> 1500 // butų kvadartų kainų vidurkis

console.groupEnd();


