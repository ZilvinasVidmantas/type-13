const flats = [
  {
    address: 'Vilnakiemio g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
      { title: 'miegamasis', area: 16 },
    ],
    city: 'Vilnius',
    price: 120000
  },

  {
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
  },

  {
    address: 'Saulės g. 7',
    rooms: [
      { title: 'virtuvė', area: 12 },
      { title: 'svetainė', area: 20 },
      { title: 'tualetas', area: 8 },
    ],
    city: 'Klaipėda',
    price: 80000
  },
];

// Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviestami metodą Array.prototype.forEach

// Jeigu reikia kaupti/formuoti reikšmę su kiekvienu masyvo elementu, naudojama metodologija:
// 1. padeklaruojamas pradinis elementas
// 2. Pradedamas ciklas
//  2.1 Kiekviena iteracija papildo/keičia padeklaruotą kintamajį [1.]
// 3. atliekamas galutinis formavimas
// 4. grąžinama/spausdinama reikšmė 

console.group('1. Atspausdinkite kiekvieno buto adresą su miestu');
{
  function printAdressWithCity(flat) {
    console.log(`${flat.address}, ${flat.city}`);
  }

  flats.forEach(printAdressWithCity);
}
console.groupEnd();

console.group('2. Atspausdinkite kiekvieno buto kambarių skaičių');
{

}
console.groupEnd();

console.group('3. Atspausdinkite kiekvieno buto bendrą plotą');
{

}
console.groupEnd();

console.group('4. Atspausdinkite kiekvieno buto eilutes, kuriose kableliais atskirti kambarių pavadinimai');
{
  function printFlatRoomNames(flat) {
    // 1.
    let flatRoomsString = '';

    // 2.1
    function appendRoomTitleName(room) {
      flatRoomsString += room.title + ', ';
    }

    // 2.
    flat.rooms.forEach(appendRoomTitleName);

    // 3.
    flatRoomsString = flatRoomsString.slice(0, -2);

    // 4.
    console.log(flatRoomsString);
  }

  flats.forEach(printFlatRoomNames)
}
console.groupEnd();

console.group('5. Atspausdinkite kiekvieno buto kvadrato kainą');
{

}
console.groupEnd();

console.group('6. Atspausdinkite kiekvieno buto kvadrato kainą ir adresą formatu "<address>, <city>: <kvadrato kaina>"');
{

}
console.groupEnd();





