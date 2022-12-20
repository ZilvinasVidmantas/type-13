console.group('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#grouping_objects_by_a_property');
{
  const people = [
    { name: "Alice", age: 21 },
    { name: "Alice", age: 23 },
    { name: "Alice", age: 25 },
    { name: "Max", age: 23 },
    { name: "Max", age: 21 },
    { name: "Jane", age: 21 },
  ];

  const groupBy = (arrayOfObjects, propName) => {
    console.group(`groupBy("${propName}")`);
    const returnValue = arrayOfObjects.reduce((acc, obj, i) => {
      console.group('reducer annonymous function call ' + (i + 1));
      console.log({ acc, obj });
      // 1: key = 21
      // 2: key = 23
      // 3: key = 25
      // 4: key = 23
      const key = obj[propName];
      // 1: curGroup = []
      // 2: curGroup = []
      // 3: curGroup = []
      // 4: curGroup = [{ name: "Alice", age: 23 }];
      const curGroup = acc[key] ?? [];
      /*
        1: next = { 
          21: [{ name: "Alice", age: 21 }],
        }
        2: next = {
          21: [{ name: "Alice", age: 21 }],
          23: [{ name: "Alice", age: 23 }],
        }
        3: next = { 
          21: [{ name: "Alice", age: 21 }],
          23: [{ name: "Alice", age: 23 }],
          25: [{ name: "Alice", age: 25 }], 
        }
        4: next = { 
          21: [{ name: "Alice", age: 21 }],
          25: [{ name: "Alice", age: 25 }], 
          23: [{ name: "Alice", age: 23 }, { name: "Max", age: 23 }] 
        }
      */
      const next = { ...acc, [key]: [...curGroup, obj] };
      console.groupEnd();
      return next;
    }, {});
    console.groupEnd();
    return returnValue;
  }

  const groupedPeople = groupBy(people, "age");
  console.log('finalResult:', groupedPeople);
}
console.groupEnd();