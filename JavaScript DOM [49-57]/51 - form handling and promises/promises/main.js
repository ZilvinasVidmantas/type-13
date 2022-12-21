const tableContainer = document.querySelector('.js-table-container');

const fromJson = (res) => res.json();

const displayTodosTable = (todos) => {
  tableContainer.innerHTML = `
  <table class="table table-striped shadow-sm">
    <thead class="bg-dark text-white">
      <tr>
        <th>Todo ID</th>
        <th>Title</th>
        <th>User ID</th>
        <th>Is Completed?</th>
      </tr>
    </thead>
    <tbody>
      ${todos.map(({ id, userId, title, completed }) => `
      <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${userId}</td>
        <td>${completed ? 'Yes' : 'No'}</td>
      </tr>
      `).join('')}
    </tbody>
  </table>`;
}

const displayError = (error) => console.error(error);

// Old Scholl
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(fromJson)
  .then(displayTodosTable)
  .catch(displayError);

// Async Function declaration + invocation
const fetchTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await fromJson(response);
    displayTodosTable(todos);
  } catch (error) {
    displayError(error);
  }
}
fetchTodos();

// IIFE - Immeditaly invoked function expression
(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await fromJson(response);
    displayTodosTable(todos);
  } catch (error) {
    displayError(error);
  }
})()

