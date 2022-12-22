import API from './api.js';
import ItemsTableComponent from './components/concrete/items-table-component.js';
import ContainerComponent from './components/wrappers/container-component.js';
import HeaderComponent from './components/concrete/header-component.js';

const rootHtmlElement = document.querySelector('#root');

API.getItems()
  .then((items) => {
    const itemsTableComponent = new ItemsTableComponent(items);
    const headerComponent = new HeaderComponent({
      text: 'Darbų sąrašas',
      className: 'text-center my-4',
    });

    const container = new ContainerComponent([
      headerComponent.htmlElement,
      itemsTableComponent.htmlElement,
    ]);

    rootHtmlElement.append(
      container.htmlElement,
    );
  });