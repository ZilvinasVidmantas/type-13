const arr = [1, 5, 9, -11, 5, 4]; // n: 6
//           0  1  2   3   4  5

console.group('su FOR ciklu atbuline tvarka');
for (let i = arr.length - 1; i >= 0; i -= 1) {
  console.log(arr[i]);
}
console.groupEnd()

console.group('su WHILE ciklu');
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i += 1;
}
console.groupEnd()
