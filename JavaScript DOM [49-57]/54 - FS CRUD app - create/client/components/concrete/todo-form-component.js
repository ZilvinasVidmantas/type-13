class TodoFormComponent {
  htmlElement;

  constructor() {
    this.htmlElement = document.createElement('form');
    this.htmlElement.className = 'todo-form shadow p-4'
    this.htmlElement.innerHTML = `
    <h2 class="h2 text-center mb-4 fw-normal">Create Todo</h2>
    <div class="mb-3">
      <label for="todo-title" class="form-label">Title</label>
      <input type="text" class="form-control" id="todo-title" name="title">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="todo-done" name="done">
      <label class="form-check-label" for="todo-done">Job is done</label>
    </div>
    <button type="submit" class="btn btn-primary w-100">Create</button>`;

    this.htmlElement.addEventListener('submit', (event) => {
      event.preventDefault();

      // Forma privalo turėti [name] atributus
      const formData = new FormData(event.target);
      const title = formData.get('title');
      const done = formData.get('done') === 'on';

      // Validacija


      // Validacija sekminga


      // validacija nesekminga

      const dataForTodoCreation = { title, done };

      console.log(dataForTodoCreation)


    });
  }
}

export default TodoFormComponent;
