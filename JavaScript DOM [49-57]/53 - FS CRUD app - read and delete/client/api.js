const API = {
  async getItems() {
    try {
      const response = await fetch('http://localhost:5000/items');
      const items = await response.json();

      return items;
    } catch (error) {
      return error;
    }
  },

  async deleteItem(id) {
    console.log(`siunčiame užklausa ištrinti elementą su id: "${id}"`);
  }
};

export default API;