const pause = (ms) => new Promise((res) => setTimeout(res, ms));

const mockDB = {
  users: [{
    id: '1',
    name: 'Serbentautas',
    surname: 'Bordiūras',
    email: 'user1@gmail.com',
    password: 'Vilnius123'
  }, {
    id: '2',
    name: 'Saulėja',
    surname: 'Balamutrė',
    email: 'user2@gmail.com',
    password: 'Vilnius123'
  }, {
    id: '3',
    name: 'Baulojus',
    surname: 'Kėglys',
    email: 'user3@gmail.com',
    password: 'Vilnius123'
  }]
}

const API = {
  login: async ({ email, password }) => {
    // Laukiama 400ms
    await pause(400);

    const foundUser = mockDB.users.find((user) => user.email === email);

    if (foundUser === undefined) {
      return {
        error: 'Klaida: vartotojas su tokiu paštu nerastas.',
      };
    }

    const correctPassword = foundUser.password === password;

    if (!correctPassword) {
      return {
        error: 'Klaida: neteisingas slaptažodis.',
      };
    }

    const { password: _, ...user } = foundUser;

    return user;
  }
}