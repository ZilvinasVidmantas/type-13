const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];

{
  function replacePersonCredentialsToFullname(person) {
    return {
      fullname: `${person.name} ${person.surname}`,
      sex: person.sex,
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar
    }
  }

  const formattedPeople = people.map(replacePersonCredentialsToFullname);
  console.table(formattedPeople);
}

{
  function replacePersonCredentialsToFullnameReducer(prevPeopleArr, person) {
    prevPeopleArr.push({
      fullname: `${person.name} ${person.surname}`,
      sex: person.sex,
      age: person.age,
      income: person.income,
      married: person.married,
      hasCar: person.hasCar
    })

    return prevPeopleArr;
  }

  const formattedPeople = people.reduce(replacePersonCredentialsToFullnameReducer, []);
  console.table(formattedPeople);
}

{
  const formattedPeople = people.map(({ name, surname, ...props }) => ({
    fullname: `${name} ${surname}`,
    ...props
  }));
  console.table(formattedPeople);
}