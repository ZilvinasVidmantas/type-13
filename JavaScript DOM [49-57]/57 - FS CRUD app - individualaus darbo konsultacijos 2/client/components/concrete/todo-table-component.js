class TodoTableComponent {
  htmlElement;
  tbodyHtmlElement;
  onDeleteTodo;
  onUpdateTodo;

  constructor({ todos, onDeleteTodo, onUpdateTodo }) {
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
    this.onUpdateTodo = onUpdateTodo;
    this.tbodyHtmlElement = this.htmlElement.querySelector('tbody');
    this.renderTodos(todos);
  }

  enableRowEditAction = ({
    isBeingEdited,
    tr,
    doneCheckbox,
    doneLabel,
    editButton,
    cancelEditing,
    enableEditing
  }) => {
    document.addEventListener('click', (e) => {
      e.stopPropagation();
      // Jeigu paspaustas elementas NĖRA eilutės vaikas -> atšaukti redagavimą
      if (!tr.contains(e.target)) cancelEditing();
    });

    doneCheckbox.addEventListener('change', () => {
      doneLabel.textContent = doneCheckbox.checked ? 'Yes' : 'No';
    });

    editButton.addEventListener('click', () => {
      if (isBeingEdited) cancelEditing()
      else enableEditing();
    });
  }

  enableRowDeleteAction = ({ id, initialState, delButton }) => {
    delButton.addEventListener('click', () => this.onDeleteTodo({ id, title: initialState.title }));
  }

  enableRowUpdateAction = ({
    id,
    titleColumn,
    doneCheckbox,
    initialState,
    updateButton,
    cancelEditing
  }) => {
    updateButton.addEventListener('click', () => {
      const props = {
        id,
        title: titleColumn.textContent,
        done: doneCheckbox.checked,
      };

      if (initialState.title !== props.title || initialState.done !== props.done) {
        this.onUpdateTodo({ id, props });
      } else {
        cancelEditing();
      }
    });
  }

  enableRowActions = ({ tr, id, title, done }) => {
    let isBeingEdited = false;
    const initialState = { title, done };
    const delButton = tr.querySelector('.btn-danger');
    const updateButton = tr.querySelector('.btn-success');
    const editButton = tr.querySelector('.btn-warning');
    const doneLabel = tr.querySelector('.js-done-col label');
    const titleColumn = tr.querySelector('.js-title-col');
    const doneCheckbox = tr.querySelector('.js-done-col input[type=checkbox]');

    const cancelEditing = () => {
      tr.classList.remove('todo-table__row--editable');
      editButton.innerHTML = '⟳';
      editButton.classList.replace('btn-info', 'btn-warning');
      titleColumn.setAttribute('contenteditable', 'false');
      titleColumn.textContent = initialState.title;
      doneCheckbox.checked = initialState.done;
      doneLabel.textContent = initialState.done ? 'Yes' : 'No';
      isBeingEdited = false;
    };

    const enableEditing = () => {
      tr.classList.add('todo-table__row--editable');
      editButton.innerHTML = '⦰';
      editButton.classList.replace('btn-warning', 'btn-info');
      titleColumn.setAttribute('contenteditable', 'true');
      doneCheckbox.checked = initialState.done;
      isBeingEdited = true;
    };

    const rowProps = {
      // Props
      id,
      initialState,
      isBeingEdited,
      // Elements
      tr,
      titleColumn,
      doneCheckbox,
      doneLabel,
      delButton,
      updateButton,
      editButton,
      // functions
      cancelEditing,
      enableEditing,
    };

    this.enableRowDeleteAction(rowProps);
    this.enableRowEditAction(rowProps);
    this.enableRowUpdateAction(rowProps);
  }

  createRowHtmlElement = ({ id, title, done }) => {
    const tr = document.createElement('tr');
    tr.className = 'todo-table__row';
    tr.innerHTML = `
      <td>${id}</td>
      <td class="js-title-col">${title}</td>
      <td class="js-done-col">
        <input type="checkbox" id="${id}"/>
        <label for="${id}">${done ? 'Yes' : 'No'}</label>
      </td>
      <td class="d-flex justify-content-end gap-2 todo-table__last-cell">
        <button class="btn btn-success btn-sm">✓</button>
        <button class="btn btn-warning btn-sm">⟳</button>
        <button class="btn btn-danger btn-sm">✕</button>
      </td>`;

    this.enableRowActions({ tr, id, title, done });

    return tr;
  }

  renderTodos = (todos) => {
    this.tbodyHtmlElement.innerHTML = null;
    const rowsHtmlElements = todos.map(this.createRowHtmlElement);
    this.tbodyHtmlElement.append(...rowsHtmlElements);
  }
}

export default TodoTableComponent;