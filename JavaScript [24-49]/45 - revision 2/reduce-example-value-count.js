const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice", 'Serbentautas'];

const namesCountObj = {};

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  if (namesCountObj[name] === undefined) namesCountObj[name] = 1;
  else namesCountObj[name] += 1;
}

const namesCountObj2 = names.reduce((prevObj, name) => {
  if (prevObj[name] === undefined) prevObj[name] = 1;
  else prevObj[name] += 1;

  return prevObj;
}, {});

// Nenaudoti, pateikta tik dėl sintaksės galimybių parodymo
const namesCountObj3 = names.reduce((prevObj, name) => ({
  ...prevObj,
  [name]: (prevObj[name] ?? 0) + 1,
}), {});

console.table(namesCountObj);
console.table(namesCountObj2);
console.table(namesCountObj3);
