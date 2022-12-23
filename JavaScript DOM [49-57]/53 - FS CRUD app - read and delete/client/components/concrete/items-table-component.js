import API from "../../api.js";

class ItemsTableComponent {
  htmlElement;

  constructor({ items }) {
    this.htmlElement = document.createElement('table');
    this.htmlElement.className = 'table table-striped shadow-sm';
    this.htmlElement.innerHTML = `
    <thead class="bg-dark text-white">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Is Done</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody></tbody>`;

    const tbody = this.htmlElement.querySelector('tbody');
    const rowsHtmlElements = items.map(this.createRowHtmlElement);
    tbody.append(...rowsHtmlElements);
  }

  createRowHtmlElement({ id, title, done }) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${id}</td>
      <td>${title}</td>
      <td>${done ? 'Yes' : 'No'}</td>
      <td class="d-flex justify-content-end">
        <button class="btn btn-danger btn-sm">✕</button>
      </td>`;

    const delButton = tr.querySelector('.btn-danger');
    delButton.addEventListener('click', () =>  API.deleteItem(id));

    return tr;
  }

}

export default ItemsTableComponent;