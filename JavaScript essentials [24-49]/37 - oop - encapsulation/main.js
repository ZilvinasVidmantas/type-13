class House {
  #address; // # - private
  #city;
  #owners;

  constructor(address, city, owners) {
    this.#address = address;
    this.#city = city;
    this.setOwners(owners);
  }

  // Setter'ius ir Getter'ius
  setOwners(owners) {
    if (!(owners instanceof Array)) {
      console.error(`Klaida: House.setOwners argumentas privalo būti masyvas.\n\tGauta: ${owners}`);
      return; // return; - nutraukia funkciją;
    }
    if (!owners.every((owner) => owner instanceof Object)) {
      console.error(`Klaida: House.setOwners masyvo visi elementai turi būti objektai.\n\tGauta: ${owners}`);
      return; // return; - nutraukia funkciją;
    }
    if (!owners.every((owner) => typeof owner.name === 'string')) {
      console.error(`Klaida: House.setOwners masyvo visi elementai turi turėti savybę 'name' .\n\tGauta: ${owners}`);
      return; // return; - nutraukia funkciją;
    }

    this.#owners = owners;
  }

  getOwners() {
    // TODO: Atliekamos duomenų pasiekimo apsaugos...
    return this.#owners;
  }

  printOwners() {
    const ownersRows = '\t' + this.#owners.map(({ name }) => name).join('\n\t');
    console.log(`${this.#address}, ${this.#city}. Owners:\n${ownersRows}`);
  }
}

const houses = [
  new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]),
  new House('Aliejų g. 121', 'Kaunas', [{ name: 'Sensas Jautimantas' }, { name: 'Rekė Jautimantė' }]),
  new House('Sustenų g. 7', 'Vilnius', [{ name: 'Groja Blanienė' }, { name: 'Fartas Blanys' }]),
  new House('Varkatkų g. 7', 'Klaipėda', [{ name: 'Faryja Mirgaitė' }]),
];

// Tiesioginis klaidingas priskyrimas

houses[0].setOwners([{ name: 'Verslioras Eurikas' }, { name: 'Kepėja Eurikė' }])

houses.forEach(house => house.printOwners())
