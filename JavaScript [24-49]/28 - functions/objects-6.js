function toArray(obj) {
  const result = [];
  let i = 0;
	for (const key in obj) {
    result[i] = [key, obj[key]];
    i += 1;
  }

  return result;
}

// function toArray(obj) {
//   return Object.entries(obj);
// }

const arr1 = toArray({ a: 1, b: 2, c: 6 });
const arr2 = toArray({ shrimp: 15, tots: 122});

console.log(arr1);
console.log(arr2);
