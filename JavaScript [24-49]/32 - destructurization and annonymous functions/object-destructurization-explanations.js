const user1 = {
  id: 1,
  name: 'Vandal',
  surname: 'Košmar',
  email: 'triukšmas@gaisras.lt',
  role: {
    id: 1,
    title: 'User'
  },
  lastLogin: new Date('2022-10-11')
};

const user2 = {
  id: 2,
  name: 'Roka',
  surname: 'Kakarieka',
  email: 'gaidynas@gaisras.lt',
  role: {
    id: 2,
    title: 'Moderator'
  },
  lastLogin: new Date('2022-11-11')
};

/*
  Kuriami kintamieji <name> ir <surname>, pagal <user1> objekto savybes name ir surname
*/
const { name, surname } = user1;

/*
  Kuriami kintamieji <name2> ir <surname2>, pagal <user2> objekto savybes name ir surname
*/
const { name: name2, surname: surname2 } = user2;

/*
  Kuriami kintamieji <name1> ir <surname1>, pagal <user1> objekto savybes name ir surname,
  o likusios savybės yra patalpinamos naujame objekte <user1Props>
*/
const { name: name1, surname: surname1, ...user1Props } = user1;

/*
  Sukuriamas naujas objektas <user1LT>, kuriame priskiriamos visos savybės esančios objekte <user1>,
  bei papildomai sukuriama savybė location.
*/
const user1LT = {
  ...user1,
  // id: user1.id,
  // name: user1.name,
  // surname: user1.surname,
  // email: user1.email,
  // role: user1.role,
  // lastLogin: user1.lastLogin,
  location: 'Lithuania',
}

// Primityvios reikšmės pakitimas neįtakoja kito objekto, nes reikšmė buvo primityvi
user1.name = 'PAKEISTAS_NAME';
console.log(user1.name, user1LT.name);

user1.role.id = 'PAKEISTAS_ROLES_ID';
console.log(user1.role.id, user1LT.role.id);
console.log(user1);
console.log(user1LT);

/*
  Daroma prielaida, kad pirmu argumentu bus perduodamas objektas, turintis
  savybes name ir surname. Funkcijos vykdymo aplinkoje sukuriami nauji kintamieji
  kurių reikšmės bus tokios pat ir tais pačiais pavadinimais, kaip objekto savybės
  name ir surname
*/
function printFullName({ name, surname }) {
  console.log(`${name} ${surname}`);
}

// printFullName({ name: 'Serbentautas', surname: 'Bordiūras' });
// printFullName({ name: 'Valkoja', surname: 'Rankinė', age: 35 });
