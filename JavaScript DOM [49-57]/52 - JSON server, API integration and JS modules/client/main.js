import API from './api.js';
import ItemsTableComponent from './components/items-table-component.js';

// Client side rendering - taikuomas kuomet jūsų aplikacija yra grįsta duomenimis (data heavy)
// Tuomet taikomi data based rendering principai atvaizduoti jūsų turiniui

const rootHtmlElement = document.querySelector('#root');

API.getItems()
  .then((items) => {
    const itemsTableComponent = new ItemsTableComponent(items);
    rootHtmlElement.append(
      itemsTableComponent.htmlElement,
    );
  });