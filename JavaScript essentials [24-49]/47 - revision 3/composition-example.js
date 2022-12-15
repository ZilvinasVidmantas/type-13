class Actor {
  name;
  surname;
  pastMovies;

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.pastMovies = [];
  }

  get fullname() {
    return this.name + ' ' + this.surname;
  }
}

class MovieRole {
  title;
  description;
  actor;

  constructor(title) {
    this.title = title;
  }

  assignActor(newActor) {
    this.actor = newActor;
  }

  removeActor() {
    this.actor = undefined;
  }
}

class Movie {
  title;
  roles;

  constructor(title) {
    this.title = title;
    this.roles = [];
  }

  addRole(title) {
    this.roles.push(new MovieRole(title));
  }

  assingRoleToActor(roleTitle, actor) {
    const role = this.roles.find((role) => role.title === roleTitle);
    if (role === undefined) {
      console.error(`Klaida vykdant "Movie.assingActorToRole":\n\tRolė "${roleTitle}" nerasta filme "${this.title}".`);
      return;
    }

    if (!(actor instanceof Actor)) {
      console.error(`Klaida vykdant "Movie.assingActorToRole":\n\Aktorius "${actor}" privalo būti "${Actor.name}" klasės objektas.`);
      return;
    }

    role.assignActor(actor);
  }

  removeRoleOfActor(roleTitle, actor) {
    const role = this.roles.find((role) => role.title === roleTitle);
    if (role === undefined) {
      console.error(`Klaida vykdant "Movie.releaseActor":\n\tRolė "${roleTitle}" nerasta filme "${this.title}".`);
      return;
    }

    if (!(actor instanceof Actor)) {
      console.error(`Klaida vykdant "Movie.releaseActor":\n\Aktorius "${actor}" privalo būti "${Actor.name}" klasės objektas.`);
      return;
    }

    role.removeActor();
  }

  printCast() {
    console.log(`"${this.title}" cast:`)
    this.roles.forEach((role) => console.log(`\t* ${role.title}: ${role.actor?.fullname ?? '---'}`));
  }
}

const actor1 = new Actor('Belvartas', 'Suknistauskas')
const myMovie = new Movie('TypeScript 13 gyvenimas');

myMovie.addRole('Koordinatorius');
myMovie.addRole('Dėstytojas');

myMovie.assingRoleToActor('Koordinatorius', new Actor('Kiberas', 'Faustanatas'));
myMovie.assingRoleToActor('Dėstytojas', actor1);

myMovie.printCast();

myMovie.removeRoleOfActor('Dėstytojas', actor1);

myMovie.printCast();
