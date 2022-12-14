const filmsData = [{
  title: 'The Matrix',
  roles: [
    { title: 'Neo', actor: { name: 'Keanu', surname: 'reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [10, 8, 9, 9, 9, 7, 10, 10, 10],
  year: 1999,
}, {
  title: 'The Matrix Reloaded',
  roles: [
    { title: 'Neo', actor: { name: 'Keanu', surname: 'Reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [7, 7, 8, 9, 10, 10],
  year: 2003,
}, {
  title: 'The Matrix Revolutions',
  roles: [
    { title: 'Neo', actor: { name: 'keanu', surname: 'Reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [7, 8, 9, 10, 10, 10, 7, 8],
  year: 2003,
}, {
  title: 'The Shawshank Redemption',
  roles: [
    { title: 'Andy Dufresne', actor: { name: 'Tim', surname: 'Robbins' } },
    { title: "Ellis Boyd 'Red' Redding", actor: { name: 'Morgan', surname: 'Freeman' } },
  ],
  ratings: [10, 10, 10, 10, 10, 8, 10, 10],
  year: 1994,
}, {
  title: 'The Godfather',
  roles: [
    { title: 'Don Vito Corleone', actor: { name: 'Marlon', surname: 'Brando' } },
    { title: 'Michael Corleone', actor: { name: 'Al', surname: 'Pacino' } },
    { title: 'Tom Hagen', actor: { name: 'Robert', surname: 'Duvall' } },
  ],
  ratings: [10, 10, 9, 10, 8, 10, 10],
  year: 1972,
}, {
  title: 'The Dark Knight',
  roles: [
    { title: 'Joker', actor: { name: 'Heath', surname: 'Ledger' } },
    { title: 'Bruce Wayne', actor: { name: 'Christian', surname: 'Bale' } },
  ],
  ratings: [10, 9, 9, 9, 10, 8, 10, 10],
  year: 2008,
}];

class Film {
  title;
  roles;
  ratings;
  year;

  constructor({ title, roles, ratings, year }) {
    this.title = title;
    this.roles = roles;
    this.ratings = ratings;
    this.year = year;
  }

  get ratingCount() {
    return this.ratings.length;
  }

  get rating() {
    const sum = this.ratings.reduce((sum, score) => sum + score);
    const avg = sum / this.ratingCount;
    const avgRounded = Math.round(avg * 10) / 10

    return avgRounded;
  }
}

let film;
let films;
let filmsByRating;

console.group('1. Sukurkite klas?? <Film>, kuri tur??t?? savybes kaip kiekvienas <filmsData> objektas');
{
  film = new Film({
    title: 'The Matrix',
    roles: [
      { title: 'Neo', actor: { name: 'Keanu', surname: 'Reeves' } },
      { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
      { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
    ],
    ratings: [10, 8, 9, 9, 9, 7, 10, 10, 10],
    year: 1999,
  });

  console.dir(Film);
  console.dir(film);
}
console.groupEnd();

console.group('2. Panaudokite <filmsData> duomenis kad sukurti <Film> klas??s objekt?? masyv??');
{
  films = filmsData.map((filmData) => new Film(filmData));
  console.table(films);
}
console.groupEnd();

console.group('3. Sukurkite get`er?? <ratingCount>, kuris gr????int?? filmo ??vertinim?? skai??i??.');
{
  films.forEach((film) => console.log(film.ratingCount));
}
console.groupEnd();

console.group('4. Sukurkite get`er?? <rating>, kuris gr????int?? filmo ??vertinim??, suapvalint?? iki 1 skai??iaus po kablelio');
{
  films.forEach((film) => console.log(film.rating));
}
console.groupEnd();

console.group('5. I??rikiuokite filmus pagal reiting??, nuo ma??iausio iki did??iausio, nepakei??iant orginali?? duomen??');
{
  filmsByRating = [...films].sort((f1, f2) => f1.rating - f2.rating);
  console.table();
}
console.groupEnd();

console.group('6. Atvaizduokite [5.] punktu i??rikiuot?? film?? atvaizdavim?? lentele(console.table). Lentel?? turi tur??ti 3 stulpelius: "title", "rating" ir  "ratingCount"');
{
  const filmsRatingsInfo = filmsByRating.map(({ title, rating, ratingCount }) => ({
    title,
    rating,
    ratingCount
  }));
  console.table(filmsRatingsInfo);
}
console.groupEnd();

console.group('7. Suskai??iuokite kiek yra film?? senesni?? nei 2000 metai');
{
  const filmsCountUnder2000 = films.reduce((count, { year }) => year < 2000 ? count + 1 : count, 0);
  console.log({ filmsCountUnder2000 });
}
console.groupEnd();

console.group('8. Atrinkite visus filmus kurie pavadinime turi ??od?? "Matrix"');
{
  const filmsMatrix = films.filter(({ title }) => title.includes('Matrix'));
  console.table(filmsMatrix);
}
console.groupEnd();

console.group('9. Atrinkite filmus kuriuose vaidino "Keanu Reeves". Atrinkim?? atlikite ignoruojant raid??i?? dyd??i?? nesutapim??');
{
  const actorFullname = "Keanu Reeves";
  const filmsWithKeanuReeves = films.filter((film) => film.roles.some(
    ({ actor }) => (`${actor.name} ${actor.surname}`).toLowerCase() === actorFullname.toLowerCase())
  );
  console.table(filmsWithKeanuReeves);
}
console.groupEnd();

console.group('10. Suformuokite nauj?? masyv?? i?? <Film> masyvo duomen??, pagal format?? komentaruose.');
/*
Result object
{
  name - pavadinimas
  cast - string'?? masyvas formatu: `<rol??>: <actor.name> <actor.surname>`
  rating - ??vertinimas
  ratingCount - ??vertinim?? kiekis
  year - metai
}

pvz1:
{
  name: "The Matrix",
  cast: (3) ['Neo: Keanu reeves', 'Morpheus: Laurence Fishburne', 'Trinity: Carrie-Anne Moss'],
  rating: 9.1,
  ratingCount: 9,
  year: 1999,
}

pvz2:
{
  name: "The Dark Knight",
  cast: (2) ['Joker: Heath Ledger', 'Bruce Wayne: Christian Bale'],
  rating: 9.4,
  ratingCount: 8,
  year: 2008,
}
*/
{
  const filmsFormatted = films.map(({ title, roles, rating, ratingCount, year }) => ({
    name: title,
    cast: roles.map(({ title, actor: { name, surname } }) => `${title}: ${name} ${surname}`),
    rating,
    ratingCount,
    year,
  }));
  console.table(filmsFormatted);
}
console.groupEnd();
