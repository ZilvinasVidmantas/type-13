class ItemsTableComponent {
  htmlElement;

  constructor(items) {
    this.htmlElement = document.createElement('table');
    this.htmlElement.className = 'table table-striped shadow-sm';
    this.htmlElement.innerHTML = `
    <thead class="bg-dark text-white">
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Is Done</th>
      </tr>
    </thead>
    <tbody>
      ${items.map(({ id, title, done }) => `
      <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${done ? 'Yes' : 'No'}</td>
      </tr>
      `).join('')}
    </tbody>`;
  }
}

export default ItemsTableComponent;