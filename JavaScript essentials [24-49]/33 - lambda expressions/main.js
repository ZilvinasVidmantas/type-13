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

console.group('1. Atspausdinkite kiekvieno buto adresą su miestu');
// '<address>, <city>'
{
  flats.forEach(({ address, city }) => console.log(`${address}, ${city}`));
}
console.groupEnd();

console.group('2. Sukurkite masyvą iš butų kamarių skaičiaus');
// [4, 5, 3, 3, 3, 3]
{
  const flatsRoomsCount = flats.map(({ rooms }) => rooms.length);
  console.log(flatsRoomsCount);
}
console.groupEnd();

console.group('3. Suformuokite butų plotų masyvą');
{
  const flatsAreas = flats.map((flat) => /* return */ flat.rooms
    .reduce((prevRoomsAreaSum, room) => /* return */ prevRoomsAreaSum + room.area, 0)
  );

  const flatsAreas2 = flats.map(function (flat) {
    return flat.rooms.reduce(function (prevRoomsAreaSum, room) {
      return prevRoomsAreaSum + room.area
    }, 0)
  });
  console.log(flatsAreas);
  console.log(flatsAreas2);

}
console.groupEnd();

console.group('4. Atrinkite 4 kambarių ir dedesnius butus');
// [{...}, {...}]
{
  const bigFlats = flats.filter(({ rooms }) => rooms.length >= 4);
  console.table(bigFlats);
}
console.groupEnd();

console.group('5. Apskaičiuokite visų butų bendrą plotą');
{
  const totalArea = flats.reduce((totalSum, flat) => totalSum + flat.rooms
    .reduce((flatSum, { area }) => flatSum + area, 0)
    , 0);
  console.log(totalArea);

}
console.groupEnd();

console.group('6. Atrinkite 3 kambarių butus iš Kauno, kurių kaina mažesnė nei 100 000');
{
  const specificFlats = flats.filter(({ rooms, city, price }) =>
    rooms.length === 3 &&
    city === 'Kaunas' &&
    price < 100000
  );

  console.log(specificFlats);
}
console.groupEnd();

console.group('7. Performuokite butus formatu pateiktu komentaruose');
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
  const refactoredFlats = flats.map(({ address, city, price: oldPrice, rooms }) => {
    const squares = rooms.reduce((sum, { area }) => sum + area, 0);
    const price = oldPrice * 1.1;

    return {
      address: `${address}, city`,
      city,
      price,
      roomCount: rooms.length,
      squares,
      squarePrice: price / squares,
    };
  });

  console.table(refactoredFlats);
}
console.groupEnd();

// Papildomai
console.group('8. Atrinkite butus, kurie turi nors vieną kambarį, didesnį nei 19 kvadratų');
{
  {
    const flatsWithBigRoom = flats.filter(({ rooms }) => rooms
      .filter(({ area }) => area > 19).length > 0
    );

    console.log(flatsWithBigRoom);
  }

  {
    const flatsWithBigRoom = flats.filter(({ rooms }) => rooms
      .reduce((currentMaxArea, { area }) => area > currentMaxArea
        ? area
        : currentMaxArea,
        0) > 19
    );

    console.log(flatsWithBigRoom);
  }

  {
    const flatsWithBigRoom = flats.filter(({ rooms }) =>
      Math.max(...rooms.map(({ area }) => area)) > 19
    );

    console.log(flatsWithBigRoom);
  }

  {
    const flatsWithBigRoom = flats.filter(({ rooms }) =>
      rooms.map(({ area }) => area).sort((a, b) => b - a)[0] > 19
    );

    console.log(flatsWithBigRoom);
  }

  {
    const flatsWithBigRoom = flats.filter(({ rooms }) => rooms.find(({ area }) => area > 19));

    console.log(flatsWithBigRoom);
  }

  {
    const flatsWithBigRoom = flats.filter(({ rooms }) => rooms.findIndex(({ area }) => area > 19) !== -1);

    console.log(flatsWithBigRoom);
  }
}
console.groupEnd();

console.group('9. Apskaičiuokite visų būtų kainos vidurkį,');
{
  const priceAvg = flats.reduce((sum, { price }) => sum + price, 0) / flats.length;
  console.log(priceAvg);
}
console.groupEnd();

console.group('10. Apskaičiuokite visų būtų kainą už kvadratą');
// 20 - 20 000;           40 - 40 000; -> 60 000 / 60 -> 1000
//  1000                     1000                     -> 1000

// 20 - 20 000;           20 - 40 000;                -> 1500
//  1000                     2000                     -> 1500 

// 20 - 20 000;           30 - 60 000; -> 80 000/50   -> 1600 // butų kvadrato kaina
//  1000                    2000                      -> 1500 // butų kvadartų kainų vidurkis
{
  //                                                     Prev Iteration Result       current element
  const { totalPrice, totalSquares } = flats.reduce(({ totalPrice, totalSquares }, { price, rooms }) => ({
    totalPrice: totalPrice + price,
    totalSquares: totalSquares + rooms.reduce((sum, { area }) => sum + area, 0),
  }), { totalPrice: 0, totalSquares: 0 });

  const flatsSquarePriceAvg = totalPrice / totalSquares;

  console.log(flatsSquarePriceAvg);
}
console.groupEnd();
