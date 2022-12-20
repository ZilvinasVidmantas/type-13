// const createLengthValidator = (min, max) => (text) => text.length >= min && text.length <= max;
const createLengthValidator = function (min, max) {
  // funkcijos iškvietimo atminties aplinka(scope) - lexical scope - function invocation scope
  return function (text) {
    return (text.length >= min && text.length <= max) || `length must be between ${min} and ${max}.`;
  }
}

const passwordLengthValidator = createLengthValidator(6, 32);
const emailLengthValidator = createLengthValidator(8, 32);
const companyNameLengthValidator = createLengthValidator(2, 64);

console.table({
  "passwordLengthValidator('labas')": passwordLengthValidator('labas'),
  "companyNameLengthValidator('labas')": companyNameLengthValidator('labas'),
});
