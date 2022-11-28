const values = [-5, 5, 1, 4, 8, 7, 63, 14, 6, 5, 4, 9, 1, 2, 4, 5, 4, 6, 4];

const valueCountDictionary = values.reduce((prevDictionary, x) => {
  if (prevDictionary[x] === undefined) {
    prevDictionary[x] = 0;
  }
  prevDictionary[x] += 1;

  return prevDictionary;
}, {});

console.table(valueCountDictionary);

const uniqValues = values.filter((x, i, arr) => arr.indexOf(x) === i);

console.log({ uniqValues });
const uniqValuesCountDictionary = uniqValues.reduce((prevDictionary, x) => {
  if (prevDictionary[x] === undefined) {
    prevDictionary[x] = 0;
  }
  prevDictionary[x] += 1;

  return prevDictionary;
}, {});

console.table(uniqValuesCountDictionary);