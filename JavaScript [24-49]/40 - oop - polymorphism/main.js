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

  Darbui atlikti galite sukurti papildomas savo savybes ir metodus

  Išsaugokite visus darbuotojus viename masyve ir atspausdinkite visų darbuotojų atlyginimus naudodami metodą calcPay()
*/

// const people = [...];
// const pays = people.map(p => p.calcPay); // Array<number>;
