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

class WorkPerson {
  hourPay;
  fullTimeEquivalent;

  constructor(hourPay, fullTimeEquivalent) {
    this.hourPay = hourPay;
    this.fullTimeEquivalent = fullTimeEquivalent;
  }

  calcPay() {
    const monthDays = calcMonthWorkDays();
    return monthDays * this.hourPay * this.fullTimeEquivalent * 8;
  }
}

const workers = [
  new WorkPerson(10, 1),
  new WorkPerson(10, 0.5),
  new WorkPerson(15, 1),
  new WorkPerson(6, 0.5),
];

workers.forEach(w => console.log(w.calcPay()));