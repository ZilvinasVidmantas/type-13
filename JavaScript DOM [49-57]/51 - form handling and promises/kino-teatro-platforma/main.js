// 2.1
const formPriceByAge = document.querySelector('.js-form-price-by-age');
const inputAge = formPriceByAge.querySelector('.js-input-age');
const invalidFeedbackInputAge = formPriceByAge.querySelector('.js-invalid-feedback-input-age');
const priceElement = formPriceByAge.querySelector('.js-price-element');
const priceContainer = formPriceByAge.querySelector('.js-price-container');

const getValidatedAge = (value) => {
  if (value === '') return 'Laukas privalomas';
  const numericValue = Number(value);
  if (isNaN(numericValue)) return 'Privalo būti skaičius';
  if (numericValue <= 0) return 'Privalo būti daugiau už 0';
  if (numericValue > 150) return 'Privalo būti mažiau už 150';

  return numericValue;
};

// Kviečiama NE sėkmės atveju
const displayAgeError = (errorMsg) => {
  inputAge.classList.add('is-invalid');
  invalidFeedbackInputAge.textContent = errorMsg;
};

// Kviečiama sėkmės atveju
const hideAgeError = () => {
  inputAge.classList.remove('is-invalid');
};

// Kviečiama sėkmės atveju
const displayPrice = (text) => {
  priceContainer.classList.remove('d-none');
  priceElement.textContent = text;
};

// Kviečiama NE sėkmės atveju
const hidePriceContainer = () => {
  priceContainer.classList.add('d-none');
};

const handleFormPriceByAgeSubmitSuccess = async (validatedAge) => {
  // 2.3.5.1.1
  const price = await API.getPriceByAge(validatedAge);
  // 2.3.5.1.2
  hideAgeError();
  // 2.3.5.1.3
  displayPrice(price);
};

const handleFormPriceByAgeSubmitFailure = (errorMsg) => {
  // 2.3.5.2.1
  displayAgeError(errorMsg);
  // 2.3.5.2.2
  hidePriceContainer();
};

// 2.3 - Controller
const handleFormPriceByAgeSubmit = (event) => {
  // 2.3.1
  event.preventDefault();
  // 2.3.2
  const formData = new FormData(event.target);

  // 2.3.3
  const age = formData.get('age');

  // 2.3.4
  const validatedAgeOrErrorMsg = getValidatedAge(age);

  // 2.3.5
  if (typeof validatedAgeOrErrorMsg !== 'string') {
    // 2.3.5.1
    handleFormPriceByAgeSubmitSuccess(validatedAgeOrErrorMsg);
  } else {
    // 2.3.5.2
    handleFormPriceByAgeSubmitFailure(validatedAgeOrErrorMsg);
  }
};

// 2.2
formPriceByAge.addEventListener('submit', handleFormPriceByAgeSubmit);
