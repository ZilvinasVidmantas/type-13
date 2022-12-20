// Biblioteka turi knygas;

class Library {
  static count = 0;

  #id;
  #address;
  #sectors;
  #categoryNames;

  constructor(address, categoryNames) {
    Library.count += 1;
    this.#id = `Library_${Library.count}`;
    this.#address = address;
    this.#categoryNames = categoryNames;
    this.#sectors = categoryNames.reduce((prevObj, categoryName) => {
      prevObj[categoryName] = [];

      return prevObj;
    }, {});
  }

  addBook(book, categoryName) {
    if (!(book instanceof Book)) {
      console.error('Bibliotekai galite pridėti tik knygas');
    }
    if (!this.#categoryNames.includes(categoryName)) {
      console.error(`'${categoryName}' kategorija neegzistuoja.\n\tGalimos kategorijos: ${this.#categoryNames.join(', ')}`);
    }

    this.#sectors[categoryName].push(book);
  }

  printBooks() {
    console.log()
    Object.entries(this.#sectors).forEach(([categoryName, categoryBooks]) => {
      if (categoryBooks.length > 0) {
        console.log(`%c${categoryName}`, 'font-size: 25px; text-transform: capitalize');
        console.table(categoryBooks);
      }
    })
  }
}

class Book {
  static count = 0;

  #id;
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    Book.count += 1;
    this.#id = `Book_${Book.count}`;
    this.#title = title;
    this.#author = author;
    this.#year = year;
  }
}

const brooklynLibrary = new Library('Greek st. 25b', ['novels', 'adventure', 'horror', 'adults']);
brooklynLibrary.addBook(new Book('The Decameron', 'Giovanni Boccaccio', 1353), 'adventure');
brooklynLibrary.addBook(new Book('The 120 Days of Sodom', 'Marquis de Sade', 1789), 'adults');

brooklynLibrary.printBooks();
