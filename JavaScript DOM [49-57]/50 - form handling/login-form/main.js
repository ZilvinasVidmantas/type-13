const formLogin = document.querySelector('.js-form-login');
const allElements = document.querySelectorAll('*');

// TAM KAD SULAUKTI UŽKLAUSŲ REZULTATŲ, PRIVALOTE paskelbti funkciją asinchroninę
// tai daroma anudojant žodį async ↙
const handleFormLoginRequest = async (event) => {
  // Sustabdom standartinę formos elgseną
  event.preventDefault();
  // išsaugome formos duomenis FormData prototipe
  const formData = new FormData(event.target);

  // Pasirenkame reikalingus duomenis iš FormData prototipo
  const email = formData.get('email');
  const password = formData.get('password');
  // Paruošiame duomenis užklausai
  const values = {
    email,
    password,
  };

  // Atliekame užklausą, sulaukdami jos atsakymo
  const loginResult = await API.login(values);

  // Apdorojame atsakymą - šiuo atveju, kolkas, atspausdiname klaidas/rezultatus konsolėje
  if (loginResult.error) {
    console.error(loginResult.error);
  } else {
    const { name, surname } = loginResult;
    console.log(`%cSėkmingai prisijungta. Sveiki ${name} ${surname}!`, 'color: green');
  }
}

formLogin.addEventListener('submit', handleFormLoginRequest);
