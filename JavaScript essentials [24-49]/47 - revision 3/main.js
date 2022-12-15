const title = 'CodeAcademy';
const titleRef = new String('CodeAcademy');

console.log(`%c${title}`, 'font-size: 27px');
console.log(`%c${[...new Array(title.length)].map((x, i) => i).join(' ')}`, 'font-size: 14px;');
console.log(titleRef);

console.groupCollapsed('at');
{
  console.table({
    'title[0]': title[0],
    'title.at(0)': title.at(0),
    'title[6]': title[6],
    'title.at(6)': title.at(6),
    'title[-1]': title[-1],
    'title.at(-1)': title.at(-1),
    'title[title.length / 2]': title[title.length / 2],
    'title.at(title.length / 2)': title.at(title.length / 2),
  })
}
console.groupEnd();