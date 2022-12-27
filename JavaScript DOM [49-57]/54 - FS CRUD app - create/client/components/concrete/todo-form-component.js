class TodoFormComponent {
  htmlElement;

  constructor() {
    this.htmlElement = document.createElement('form');
    this.htmlElement.className = 'todo-form shadow p-4'
    this.htmlElement.innerHTML = `
    <h2 class="h2 text-center mb-4 fw-normal">Create Todo</h2>
    <div class="mb-3">
      <label for="todo-title" class="form-label">Title</label>
      <input type="email" class="form-control" id="todo-title">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="todo-done">
      <label class="form-check-label" for="todo-done">Job is done</label>
    </div>
    <button type="submit" class="btn btn-primary w-100">Create</button>`;
  }
}

export default TodoFormComponent;
