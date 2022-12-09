const mockString = {
  0: 'l',
  1: 'a',
  2: 'b',
  3: 'a',
  4: 's',
  5: ' ',
  6: 'r',
  7: 'y',
  8: 't',
  9: 'a',
  10: 's',
  11: '!',
  length: 12,

  at(index) {
    if (index >= 0) return this[index];

    return this[this.length + index];
  },

  /*
    Pagrindiniame simbolių darinyje ieškomas kitas simbolių darinys. Tikrinamas kiekvienas simbolis su ieškomo
    simbolių darinio pirmu simboliu. Suradus atitikmenį, tikrinamas kiekvienas sekantis ieškomo simbolių
    darinio elementų nesutapimas su kiekvienu sekančiu pagrindinio simbolių darinio simboliu. 
      * Jeigu toks nesutapimas aptinkamas, ieškomas sekantis pagrindinio simbolių darinio simbolio atitikmuo su
        ieškomo simbolių darinio pirmu elementu. 
      * Priešingu atveju, atitikus kiekvienam ieškomo simbolių darinio simboliui su pagrindinio simbolių 
        darinio kiekvienu simboliu, grąžiname teigiamą atsakymą - true;
    Jeigu ieškant sutampančių simbolių nerasta, grąžiname neigiamą atsakymą - false;
  */

  includes(subStr, indexFrom = 0) {
    outterFor: for (let j = indexFrom; j < this.length; j++) {
      if (subStr[0] === this[j]) {
        for (let i = 1; i < subStr.length; i++) {
          if (subStr[i] !== this[j + i]) {
            continue outterFor;
          }
        }
        return true;
      }
    }

    return false;
  }
}

const realString = 'labas rytas!';


console.group('Mock String.prototype.at');
{
  console.table({
    'mockString.at(0) ->  "l"': mockString.at(0),
    'mockString.at(3) ->  "a"': mockString.at(3),
    'mockString.at(15) ->  undefined': mockString.at(15),
    'mockString.at(-1) ->  "!"': mockString.at(-1),
    'mockString.at(-5) ->  "y"': mockString.at(-5),
    'mockString.at(-55) ->  undefined': mockString.at(-55),
  });
  console.table({
    'realString.at(0) ->  "l"': realString.at(0),
    'realString.at(3) ->  "a"': realString.at(3),
    'realString.at(15) ->  undefined': realString.at(15),
    'realString.at(-1) ->  "!"': realString.at(-1),
    'realString.at(-5) ->  "y"': realString.at(-5),
    'realString.at(-55) ->  undefined': realString.at(-55),
  });
}
console.groupEnd();

console.group('Mock String.prototype.includes');
{
  console.table({
    'mockString.includes("a") ->  true': mockString.includes('a'),
    'mockString.includes("a", 10) ->  false': mockString.includes('a', 10),
    'mockString.includes("g") ->  false': mockString.includes('g'),
    'mockString.includes("lab") ->  true': mockString.includes('lab'),
    'mockString.includes("lag") ->  false': mockString.includes('lag'),
  });
  console.table({
    'realString.includes("a") ->  true': realString.includes('a'),
    'realString.includes("a", 10) ->  false': realString.includes('a', 10),
    'realString.includes("g") ->  false': realString.includes('g'),
    'realString.includes("lab") ->  true': realString.includes('lab'),
    'realString.includes("lag") ->  false': realString.includes('lag'),
  });
}
console.groupEnd();