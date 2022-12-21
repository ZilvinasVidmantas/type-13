const formLogin = document.querySelector('.js-form-login');

// --------------------------- Žilvino rezultatų pateikimas --------------------------------------

// const containerAlertLogin = document.querySelector('.js-container-alert-login');
// const alertLogin = document.querySelector('.js-alert-login');
// const btnAlertLogin = alertLogin.querySelector('.btn-close');
// const textAlertLogin = alertLogin.querySelector('.js-text-alert-login');
// const hideAlert = () => containerAlertLogin.classList.add('d-none');

// const showAlert = () => containerAlertLogin.classList.remove('d-none');

// const renderLoginSuccessView = ({ name, surname }) => {
//   if (alertLogin.classList.contains('alert-danger')) {
//     alertLogin.classList.remove('alert-danger');
//   }

//   if (!alertLogin.classList.contains('alert-success')) {
//     alertLogin.classList.add('alert-success');
//   }

//   textAlertLogin.innerHTML = `Sveiki prisijungę: ${name} ${surname}!`;
//   showAlert();
// }

// const renderLoginFailureView = ({ error }) => {
//   if (alertLogin.classList.contains('alert-success')) {
//     alertLogin.classList.remove('alert-success');
//   }

//   if (!alertLogin.classList.contains('alert-danger')) {
//     alertLogin.classList.add('alert-danger');
//   }
//   textAlertLogin.innerHTML = error;
//   showAlert();
// }

// btnAlertLogin.addEventListener('click', hideAlert);

// ------------------------------- Petro rezultatų pateikimas -------------------------
const headerLoginResult = document.querySelector('.js-result');

const renderLoginSuccessView = ({ name, surname }) => {
  headerLoginResult.innerHTML = `Sveiki prisijungę: ${name} ${surname}!`;
}

const renderLoginFailureView = ({ error }) => {
  headerLoginResult.innerHTML = error;
}

// ------------------------------- Veiksmų sekos pavyzdys ---------------------------------

// TAM KAD SULAUKTI UŽKLAUSŲ REZULTATŲ, PRIVALOTE paskelbti funkciją asinchroninę
// tai daroma anudojant žodį async ↙
const handleFormLoginSubmit = async (event) => {
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
  const loginRequestResult = await API.login(values);

  // Apdorojame atsakymą - šiuo atveju, kolkas, atspausdiname klaidas/rezultatus konsolėje
  if (loginRequestResult.error) {
    renderLoginFailureView(loginRequestResult);
  } else {
    renderLoginSuccessView(loginRequestResult);
  }
}

formLogin.addEventListener('submit', handleFormLoginSubmit);
