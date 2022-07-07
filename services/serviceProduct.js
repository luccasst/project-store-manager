const modelProduct = require('../models/modelProduct');

const serviceProduct = {
  async list() {
    const itens = await modelProduct.list();
    return itens;
  },
  async productId(id) {
    const itens = await modelProduct.getById(id);
    if (!itens) {
      throw new Error('Product not found');
    }
    return itens;
  },
};

module.exports = serviceProduct;