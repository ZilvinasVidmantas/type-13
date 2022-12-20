/*
Jūsų praktikos darbo esmė, sukurti metodą vienodu pavadinimu skirtingose klasėse. Kiekviena konkreti klasė (SelfEmployedPerson, WorkPerson ir BuisnessLicencePerson) turi savaip apskaičiuoti užmokestį:

Turime 3 darbuotojų tipus:
  * self-employed-person - darbuotojas dirbantis pagal individualią veiklą, kuris gauna pinigus už išdirbtas valandas ir valandinį užmokestį;
  * work-person - žmogus kuri gauna atlygį vieną kart per mėnesį už kiekvieną darbo dieną;
  * business-license-person - žmogus kuris gauna atlygį už atliktus darbus;

  KLASĖS:
    * Person - bendros visų darbuotojų savybės
      * name
      * surname

    * WorkPerson - pagal darbo dienas mėnesyje
      * hourPay
      * fullTimeEquivalent
      * calcPay()

    * SelfEmployedPerson - pagal išdirbtas valandas
      * hourPay
      * hoursWorked
      * calcPay()

    * BuisnessLicencePerson - pagal atliktus darbus (Job)
      * jobs
      * calcPay()

    * Job - klasė kurią naudos BuisnessLicencePerson
      * id
      * finished
      * payed
      * amount

  Darbui atlikti galite sukurti papildomas savo savybes ir metodus

  Išsaugokite visus darbuotojus viename masyve ir atspausdinkite visų darbuotojų atlyginimus naudodami metodą calcPay()
*/

// const people = [...];
// const pays = people.map(p => p.calcPay); // Array<number>;

// -------------------------------- Helper Functions ---------------------------------
const calcMonthDaysCount = (date = new Date()) => {
  const lastMonthDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysCount = lastMonthDayDate.getDate();

  return daysCount;
}

const calcMonthWorkDays = (date = new Date()) => {
  const daysCount = calcMonthDaysCount(date);

  let workDays = 0;
  for (let day = 1; day <= daysCount; day += 1) {
    const monthDayDate = new Date(date.getFullYear(), date.getMonth(), day);
    const weekDay = monthDayDate.getDay();
    if (weekDay >= 1 && weekDay <= 5) {
      workDays += 1;
    }
  }

  return workDays;
}

const datesOfSameMonth = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth();
// -------------------------------- Models ---------------------------------

class Person {
  name;
  surname;

  constructor({ name, surname }) {
    this.name = name;
    this.surname = surname;
  }

  get fullname() {
    return this.name + ' ' + this.surname;
  }
}

class WorkPerson extends Person {
  hourPay;
  fullTimeEquivalent;
  previousPayoutDates;

  constructor({ hourPay, fullTimeEquivalent, ...personProps }) {
    super(personProps);
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
    this.previousPayoutDates = [];
  }

  calcPay() {
    const now = new Date();
    const alreadyPayedOut = this.previousPayoutDates.some(date => datesOfSameMonth(now, date));
    if (alreadyPayedOut) return 0;

    const monthDays = calcMonthWorkDays(now);
    this.previousPayoutDates.push(now);

    return monthDays * this.hourPay * this.fullTimeEquivalent * 8;
  }
}

class SelfEmployedPerson extends Person {
  hourPay;
  hoursWorked;

  constructor({ hourPay, ...personProps }) {
    super(personProps);
    this.hourPay = hourPay;
    this.hoursWorked = 0;
  }

  logHours(hours) {
    this.hoursWorked += hours;
  }

  calcPay() {
    const pay = this.hoursWorked * this.hourPay;
    this.hoursWorked = 0;

    return pay;
  }
}

class Job {
  static count = 0;

  id;
  title;
  amount;
  finished;

  constructor(title, amount) {
    Job.count += 1;
    this.id = `${Job.count}_${title.slice(0, 10)}`;
    this.title = title;
    this.amount = amount;
    this.finished = false;
  }
}

class BuisnessLicencePerson extends Person {
  jobs;
  payedJobs;

  constructor({ jobs, ...personProps }) {
    super(personProps);
    this.jobs = jobs ?? [];
    this.payedJobs = [];
  }

  assignJob(job) {
    this.jobs.push(job);
  }

  completeJob(jobId) {
    const jobToComplete = this.jobs.find(job => job.id === jobId);
    if (jobToComplete !== undefined) {
      jobToComplete.finished = true;
    }
  }

  calcPay() {
    const finishedJobs = this.jobs.filter(job => job.finished);
    if (finishedJobs.length > 0) {
      this.payedJobs.splice(this.payedJobs.length, 0, ...finishedJobs);

      const finishedJobsIds = finishedJobs.map(job => job.id);
      this.jobs = this.jobs.filter(job => !finishedJobsIds.includes(job.id));

      return finishedJobs.reduce((prevSum, job) => prevSum + job.amount, 0);
    }

    return 0;
  }
}



// -------------------------------- Examples ---------------------------------

const workers = [
  new WorkPerson({
    fullTimeEquivalent: 1,
    name: 'Darbyla',
    hourPay: 10,
    surname: 'Magogas',
  }),
  new WorkPerson({
    hourPay: 10,
    fullTimeEquivalent: 0.5,
    name: 'Fartina',
    surname: 'Berakelnė',
  }),
  new WorkPerson({
    hourPay: 15,
    fullTimeEquivalent: 1,
    name: 'Molopfas',
    surname: 'Bandziuga',
  }),
  new WorkPerson({
    hourPay: 6,
    fullTimeEquivalent: 0.5,
    name: 'Kengūra',
    surname: 'Šoklytė',
  }),
];

const selfEmployedPeople = [
  new SelfEmployedPerson({
    hourPay: 30,
    name: 'Namisėda',
    surname: 'Nolaiferis',
  }), // 0
  new SelfEmployedPerson({
    hourPay: 5,
    name: 'Lembargas',
    surname: 'Kalniklis',
  }),  // 1
  new SelfEmployedPerson({
    hourPay: 12,
    name: 'Vaivėdra',
    surname: 'Vėjautė',
  }), // 2
];

const buisnessLicencePeople = [
  new BuisnessLicencePerson({
    jobs: [
      new Job('Sukurti mygtuką su 3 spalvų variacijomis', 60),
      new Job('Sukurti šabloną su išskleidžiamu šoniniu meniu', 220),
      new Job('Sukurti produktų parsiuntimo ir atvaizdavimo puslapį', 300),
    ],
    name: 'Sankirta',
    surname: 'Trispalvytė',
  }),
  new BuisnessLicencePerson({
    name: 'Mauricijus',
    surname: 'Mandėla',
  }),
  new BuisnessLicencePerson({
    name: 'Šokliava',
    surname: 'Durpynytė',
  }),
];

const people = [...workers, ...selfEmployedPeople, ...buisnessLicencePeople];

console.group('WorkPerson atlyginimai');
{
  // workers.forEach(w => console.log(w.calcPay()));
}
console.groupEnd();


console.group('SelfEmployedPerson atlyginimai');
{
  selfEmployedPeople[0].logHours(180);
  selfEmployedPeople[0].logHours(40);

  selfEmployedPeople[1].logHours(30);

  selfEmployedPeople[2].logHours(30);
  selfEmployedPeople[2].logHours(10);
  selfEmployedPeople[2].logHours(10);
  selfEmployedPeople[2].logHours(20);

  // selfEmployedPeople.forEach(w => console.log(w.calcPay()));
}
console.groupEnd();

console.group('BuisnessLicencePerson atlyginimai');
{
  buisnessLicencePeople[0].assignJob(new Job('Sukurti autentifikacijos formas', 400));
  buisnessLicencePeople[0].completeJob('2_Sukurti ša');
  buisnessLicencePeople[0].completeJob('3_Sukurti pr');

  buisnessLicencePeople[1].assignJob(new Job('Sukurti banerių skečus', 100));
  buisnessLicencePeople[1].assignJob(new Job('Retušuoti sliderio nuotraukas', 200));
  buisnessLicencePeople[1].assignJob(new Job('Sukurti žaismingą spalvinė gama About puslapiui', 200));

  // buisnessLicencePeople.forEach(w => console.log(w.calcPay()));
}
console.groupEnd();

console.group('Polimorfizmo pavyzdys');
{
  const people = [...workers, ...selfEmployedPeople, ...buisnessLicencePeople];
  console.table(people);
  //                Vienoda išvaizda - skirtingas veikimas
  const pays = people.map(p => p.calcPay()); // Array<number>;
  console.log(pays);
}
console.groupEnd()

console.group('Paveldimumo pavyzdys');
{
  people.forEach(p => console.log(p.fullname));
}
console.groupEnd()