const API = {
  async getItems() {
    try {
      const response = await fetch('http://localhost:5000/items');
      const items = await response.json();

      return items;
    } catch (error) {
      return error;
    }
  }
}

export default API;