function double(number) {
  return {
    value: number,
    double: number * 2,
    triple: number * 3,
    powered: number ** 2
  };
}

const fakeArray = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  length: 9,
  map(refactorCallback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
      const returnedValue = refactorCallback(this[i], i, this);
      newArr.push(returnedValue);
    }

    return newArr;
  }
}

const doubleNumbers2 = fakeArray.map(double);
console.log(doubleNumbers2);