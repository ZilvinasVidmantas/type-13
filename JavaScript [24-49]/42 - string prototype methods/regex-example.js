const title = 'Hello my name is Kate. I have many friends. Some of them, call me Cat instead of Kate.';


// find word starting with uppercase at least twice in the text
const result2 = [...title.matchAll(/([A-Z][a-z]+).*\1/g)];


console.log(result2)