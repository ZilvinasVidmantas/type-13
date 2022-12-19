const resultContainer = document.querySelector('.js-result-container');
const btnAdd = document.querySelector('.js-btn-add');
const btnClear = document.querySelector('.js-btn-clear');
const btnDeleteLast = document.querySelector('.js-btn-delete-last');

const createNewDiv = () => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = 'Idetas tekstas';
  resultContainer.append(newDiv);
};

const clearResultContainer = () => {
  resultContainer.innerHTML = '';
};
// TODO: HTMLElement.children  vs HTMLElement.childNodes

const deleteLast = () => {
  if (resultContainer.childElementCount > 0) {
    resultContainer.childNodes[resultContainer.childElementCount - 1].remove();
  }
};

btnAdd.addEventListener('click', createNewDiv);
btnClear.addEventListener('click', clearResultContainer);
btnDeleteLast.addEventListener('click', deleteLast);
