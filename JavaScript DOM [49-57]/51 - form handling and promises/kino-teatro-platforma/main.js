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
const setPriceElementTextContent = (text) => {
  priceElement.textContent = text;
};

// Kviečiama sėkmės atveju
const displayPriceContainer = () => {
  priceContainer.classList.remove('d-none');
};

// Kviečiama NE sėkmės atveju
const hidePriceContainer = () => {
  priceContainer.classList.add('d-none');
};

const handleFormPriceByAgeSubmitSuccess = async (validatedAge) => {
  const price = await API.getPriceByAge(validatedAge);
  hideAgeError();
  setPriceElementTextContent(price);
  displayPriceContainer();
};

const handleFormPriceByAgeSubmitFailure = (errorMsg) => {
  hidePriceContainer();
  displayAgeError(errorMsg);
};

// Controller
const handleFormPriceByAgeSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const age = formData.get('age');
  const validatedAgeOrErrorMsg = getValidatedAge(age);

  if (typeof validatedAgeOrErrorMsg !== 'string') {
    handleFormPriceByAgeSubmitSuccess(validatedAgeOrErrorMsg);
  } else {
    handleFormPriceByAgeSubmitFailure(validatedAgeOrErrorMsg);
  }
};

formPriceByAge.addEventListener('submit', handleFormPriceByAgeSubmit);