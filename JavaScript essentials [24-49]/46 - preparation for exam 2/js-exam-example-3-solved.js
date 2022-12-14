const tvsData = [{
  brand: 'Samsung',
  model: 'OLED',
  price: 800,
  size: 55,
  features: {
    wifi: true,
    youtube: false,
    netflix: true,
    chromeCast: true,
  }
}, {
  brand: 'samsung',
  model: 'QLED',
  price: 1200,
  size: 45,
  features: {
    wifi: false,
    youtube: true,
    netflix: true,
    chromeCast: false,
  }
}, {
  brand: 'Samsung',
  model: 'Neo QLED',
  price: 2400,
  size: 55,
  features: {
    wifi: false,
    youtube: false,
    netflix: false,
    chromeCast: true,
  }
}, {
  brand: 'Amazon',
  model: 'Fire TV',
  price: 1500,
  size: 55,
  features: {
    wifi: false,
    youtube: true,
    netflix: true,
    chromeCast: true,
  }
}, {
  brand: 'Amazon',
  model: 'Fire TV',
  price: 1800,
  size: 65,
  features: {
    wifi: true,
    youtube: true,
    netflix: true,
    chromeCast: true,
  }
}, {
  brand: 'TCL',
  model: '4-SERIES',
  price: 350,
  size: 55,
  features: {
    wifi: true,
    youtube: false,
    netflix: false,
    chromeCast: true,
  }
}, {
  brand: 'TCL',
  model: '5-SERIES',
  price: 600,
  size: 50,
  features: {
    wifi: false,
    youtube: false,
    netflix: true,
    chromeCast: false,
  }
}, {
  brand: 'TCL',
  model: '6-SERIES',
  price: 1200,
  size: 65,
  features: {
    wifi: false,
    youtube: false,
    netflix: true,
    chromeCast: true,
  }
}];

class TV {
  brand;
  model;
  price;
  size;
  features;

  constructor({
    brand,
    model,
    price,
    size,
    features,
  }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.size = size;
    this.features = features;
  }

  get title() {
    return `${this.brand} ${this.model} - ${this.size}`;
  }

  get sizeInCm() {
    return Math.round(this.size * INCH_CM);
  }

  get featuresList() {
    return Object.entries(this.features)
      .filter(([_, isAvailable]) => isAvailable)
      .map(([feature]) => feature)
      .join(', ');
  }
}

const INCH_CM = 2.54;
let tvs;

console.group('1. Sukurkite klasę <TV>, kuri turėtų savybes pagal <peopleData> duomenis objektų ir jas priskirkite');
{
  console.dir(TV);
  console.dir(new TV(tvsData[0]));
}
console.groupEnd();

console.group('2. Panaudokite duomenis <tvsData>, kad sukurti TV klasės objektus.');
{
  tvs = tvsData.map(tvData => new TV(tvData));
  console.table(tvs);
}
console.groupEnd();

console.group('3. Sukurkite get\'erį <title> kuris grąžintų televizoriaus markę, modelį ir dydį. Formatas komentaruose.');
/*
  <brand> <model> - <size>

  pvz: 
  Samsung OLED - 55
*/
{
  tvs.forEach(tv => console.log(tv.title));
}
console.groupEnd();

console.group('4. Sukurkite get\'erį <sizeInCM> kuris grąžintų televizoriaus dydį centimetrais, suapvalintą iki vienetų');
{
  tvs.forEach(tv => console.log(tv.sizeInCm));
}
console.groupEnd();

console.group('5. Sukurkite get\'erį <featuresList> atspausdintų visas televizoriaus galimybes(features) atskirtas ", ". Jeigu <features> objekto savybė yra false, ji neturi būti spausdinama.');
{
  tvs.forEach(tv => console.log(tv.featuresList));
}
console.groupEnd();

console.group('6. Atrinkite visus televizorius, kurie turi "chromeCast" galimybę');
{
  const chromeCastTvs = tvs.filter(tv => tv.features.chromeCast);
  console.table(chromeCastTvs);
}
console.groupEnd();

console.group('7. Suskaičiuokite 55 colių televizorių vidutinę kainą');
{
  const tvs55Avg = tvs
    .filter(tv => tv.size === 55)
    .reduce((sum, { price }, _, filteredTvs) => sum + price / filteredTvs.length, 0);

  console.table({ tvs55Avg });
}
console.groupEnd();

console.group('8. Išrikiuokite televizorius pagal kainą, nepažeisdami pradinių duomenų');
{
  const tvsByPrice = [...tvs].sort((tv1, tv2) => tv1.price - tv2.price);

  console.table(tvsByPrice);
}
console.groupEnd();

console.group('9. Sugrupuokite televizorius pagal markę.');
{
  /*
  {
    amazon: [TV, TV],
    samsung: [TV, TV, TV],
    tcl: [TV, TV, TV],
  }
  */
  const tvsGroups = tvs.reduce((prevGroups, tv) => {
    const groupKey = tv.brand.toLowerCase();
    if (prevGroups[groupKey] === undefined) {
      prevGroups[groupKey] = [];
    }
    prevGroups[groupKey].push(tv);

    return prevGroups;
  }, {});

  console.table(tvsGroups);
}
console.groupEnd();

console.group('10. Suformuokite objektų masyvą pagal formatą pateiktą komentaruose, naudojant TV objektų masyvą');
{
  /*
  Result object
  {
    name,
    size,
    features,
  }

  pvz1:
  {
    name: "Samsung OLED",
    size: "140cm",
    features: "wifi, netflix, chromeCast",
  }

  pvz2:
  {
    name: "TCL 5-SERIES",
    size: "127cm",
    features: "netflix",
  }
  */

  const tvsFormatted = tvs.map(({ brand, model, sizeInCm, featuresList }) => ({
    name: `${brand} ${model}`,
    size: sizeInCm + 'cm',
    features: featuresList
  }));
  console.table(tvsFormatted);
}
console.groupEnd();