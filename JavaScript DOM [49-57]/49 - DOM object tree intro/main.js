const resultContainer = document.querySelector('.js-result-container');
const btnAdd = document.querySelector('.js-btn-add');

const createNewDiv = () => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = 'Idetas tekstas';
  resultContainer.append(newDiv);
}


btnAdd.addEventListener('click', createNewDiv);

/*
  Suraskite ištrynimo mygtuką <document> kintamajame ir padarykite,
  kas paspaudus jį, išsitrintų visas <resultContainer> turinys.

  turinio ištrynimo komanda:
  * resultContainer.innerHTML = ''
*/