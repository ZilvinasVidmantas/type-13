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

class WorkPerson {
  hourPay;
  fullTimeEquivalent;
  previousPayoutDates;

  constructor(hourPay, fullTimeEquivalent) {
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

class SelfEmployedPerson {
  hourPay;
  hoursWorked;

  constructor(hourPay) {
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

// -------------------------------- Examples ---------------------------------

const workers = [
  new WorkPerson(10, 1),
  new WorkPerson(10, 0.5),
  new WorkPerson(15, 1),
  new WorkPerson(6, 0.5),
];

const selfEmployedPeople = [
  new SelfEmployedPerson(30),
  new SelfEmployedPerson(5),
  new SelfEmployedPerson(12),
];

console.group('WorkPerson atlyginimai');
{
  workers.forEach(w => console.log(w.calcPay()));
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

  selfEmployedPeople.forEach(w => console.log(w.calcPay()))
}
console.groupEnd();
