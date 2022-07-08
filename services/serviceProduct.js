const modelProduct = require('../models/modelProduct');

const serviceProduct = {
  async list() {
    const itens = await modelProduct.list();
    return itens;
  },
  async getById(id) {
    const itens = await modelProduct.getById(id);
    if (!itens) {
      throw new Error('Product not found');
    }
    return itens;
  },
  async add(name) {
    const item = await modelProduct.add(name);
    return item;
  },
};

module.exports = serviceProduct;