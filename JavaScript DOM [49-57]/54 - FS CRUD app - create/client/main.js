import API from './api.js';
import TodoTableComponent from './components/concrete/todo-table-component.js';
import ContainerComponent from './components/wrappers/container-component.js';
import HeaderComponent from './components/concrete/header-component.js';
import TodoFormComponent from './components/concrete/todo-form-component.js';
import FlexComponent from './components/wrappers/flex-component.js';

const rootHtmlElement = document.querySelector('#root');

if (rootHtmlElement === null) throw new Error('Error: #root element  was not found in HTML file.');

API.getItems()
  .then((items) => {
    const todoTableComponent = new TodoTableComponent({ items });
    const headerComponent = new HeaderComponent({
      text: 'Task list',
      className: 'text-center my-4 fw-normal',
    });
    const todoFormComponent = new TodoFormComponent();
    const flexComponent = new FlexComponent({
      children: [
        todoTableComponent.htmlElement,
        todoFormComponent.htmlElement,
      ]
    });

    const container = new ContainerComponent({
      children: [
        headerComponent.htmlElement,
        flexComponent.htmlElement,
      ],
    });

    rootHtmlElement.append(
      container.htmlElement,
    );
  })
  .catch((err) => {
    console.error(err);
  });