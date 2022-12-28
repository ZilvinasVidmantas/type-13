class TodoTableComponent {
  htmlElement;
  tbodyHtmlElement;

  onDeleteTodo;

  constructor({ todos, onDeleteTodo }) {
    this.htmlElement = document.createElement('table');
    this.htmlElement.className = 'todo-table table table-striped shadow';
    this.htmlElement.innerHTML = `
    <thead class="bg-dark text-white">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Is Done</th>
        <th class="todo-table__last-cell">Actions</th>
      </tr>
    </thead>
    <tbody></tbody>`;
    this.onDeleteTodo = onDeleteTodo;
    this.tbodyHtmlElement = this.htmlElement.querySelector('tbody');
    this.renderTodos(todos);
  }

  createRowHtmlElement = ({ id, title, done }) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${id}</td>
      <td>${title}</td>
      <td>${done ? 'Yes' : 'No'}</td>
      <td class="d-flex justify-content-end gap-2 todo-table__last-cell">
        <button class="btn btn-warning btn-sm">⟳</button>
        <button class="btn btn-danger btn-sm">✕</button>
      </td>`;

    const delButton = tr.querySelector('.btn-danger');
    delButton.addEventListener('click', () => this.onDeleteTodo({ id, title }));

    const updateButton = tr.querySelector('.btn-warning');
    updateButton.addEventListener('click', () => {
      console.log(id);
    });

    return tr;
  }

  renderTodos = (todos) => {
    this.tbodyHtmlElement.innerHTML = null;
    const rowsHtmlElements = todos.map(this.createRowHtmlElement);
    this.tbodyHtmlElement.append(...rowsHtmlElements);
  }
}

export default TodoTableComponent;