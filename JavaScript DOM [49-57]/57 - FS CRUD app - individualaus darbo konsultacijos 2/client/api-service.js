const SERVER_ADDRESS = 'http://localhost:5001';
const TODOS_COLLECTION_NAME = 'todos';

const formatError = (error) => {
  // Įvertinant visų tipų klaidas, grąžinti standartizuotą, vienodo formato (struktūros) klaidą
  return error.message;
}

const requestSettings = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
}
// Nebaigtas optimizavavimo pavyzdys
// const createRequestHandler = ({ url = '', requestOptions = {} }) => {
//   const finalUrl = `${SERVER_ADDRESS}${url}`;

//   return async () => {
//     try {
//       const response = await fetch(finalUrl, {
//         ...commonRequestOptions,
//         ...requestOptions
//       });

//       if (response.status === 404) {
//         throw new Error(`Resource was not found at: ${response.method} "${finalUrl}"`)
//       }
//       const data = await response.json();

//       return data;
//     } catch (error) {
//       throw formatError(error);
//     }
//   }
// }

const ApiService = {
  async getTodos() {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/${TODOS_COLLECTION_NAME}`, requestSettings);
      const items = await response.json();

      return items;
    } catch (error) {
      throw formatError(error);
    }
  },

  async deleteTodo({ id, title }) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/${TODOS_COLLECTION_NAME}/${id}`, {
        ...requestSettings,
        method: 'DELETE',
      });
      if (response.status === 404) {
        throw new Error(`Element "${title}" no longer exists.`)
      }
      const deletedItem = await response.json();

      return deletedItem;
    } catch (error) {
      throw formatError(error);
    }
  },

  async createTodo(todoData) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/${TODOS_COLLECTION_NAME}`, {
        ...requestSettings,
        method: 'POST',
        body: JSON.stringify(todoData),
      });

      if (response.status === 404) {
        throw new Error(`Failed to Create new Todo`)
      }

    } catch (error) {
      throw formatError(error);
    }
  },

  async updateTodo({ id, props }) {
    try {
      const response = await fetch(`${SERVER_ADDRESS}/${TODOS_COLLECTION_NAME}/${id}`, {
        ...requestSettings,
        method: 'PATCH',
        body: JSON.stringify(props),
      });

      if (response.status === 404) {
        throw new Error(`Failed to update Todo`);
      }

    } catch (error) {
      throw formatError(error);
    }
  }
};

export default ApiService;