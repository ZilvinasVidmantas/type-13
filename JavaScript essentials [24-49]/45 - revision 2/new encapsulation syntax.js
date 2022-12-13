class Person {
  #name;
  #surname;

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  set name(value) {
    if (typeof value !== 'string') throw new Error('Neteisingas Person.name');
    this.#name = value;
  }

  get name() {
    return this.#name;
  }

  set surname(value) {
    if (typeof value !== 'string') throw new Error('Neteisingas Person.surname');
    this.#surname = value;
  }

  get surname() {
    return this.#surname;
  }

  get fullname() {
    return `${this.name} ${this.surname}`;
  }
}

const people = [
  new Person('Kiberas', 'Rudeiva'),
  new Person('Fanta', 'Burbulienė'),
  new Person('Pemala', 'Kenedė'),
  new Person('Fauras', 'Gaurauskas'),
];

const fullnames = people.map(({ fullname }) => fullname);
console.table(fullnames);
