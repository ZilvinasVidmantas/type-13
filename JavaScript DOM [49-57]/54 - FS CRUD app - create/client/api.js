const formatError = (error) => {
  // Įvertinant visų tipų klaidas, grąžinti standartizuotą, vienodo formato (struktūros) klaidą
  return error.message;
}

const API = {
  async getItems() {
    try {
      const response = await fetch('http://localhost:5000/items');
      const items = await response.json();

      return items;
    } catch (error) {
      throw formatError(error);
    }
  },

  async deleteItem({ id, title }) {
    try {
      const response = await fetch(`http://localhost:5000/items/${id}`, {
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
  }
};

export default API;