const tableContainer = document.querySelector('.js-table-container');

const transformFromJSON = (res) => res.json();

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

const displayErrors = (error) => {
  console.error(error)
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(transformFromJSON)
  .then(displayTodosTable)
  .catch(displayErrors);

