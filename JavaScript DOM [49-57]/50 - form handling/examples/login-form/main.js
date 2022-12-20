const formLogin = document.querySelector('.js-form-login');

const handleFormLoginRequest = (event) => {
  // Panaikina standartinę elgseną
  event.preventDefault();
  console.log('Apdorojama forma naudojant JavaScript');
  // TODO: kas yra event?
}

formLogin.addEventListener('submit', handleFormLoginRequest);
