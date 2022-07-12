const Joi = require('joi');
const modelProduct = require('../models/modelProduct');
const { RunSchemas } = require('./validate');

const serviceProduct = {
  addValidateBody: RunSchemas(Joi.object({
    name: Joi.string().required().min(5),
  })),

  async getAll() {
    const items = await modelProduct.getAll();
    return items;
  },
  async getById(id) {
    const item = await modelProduct.getById(id);
    if (!item) {
      throw new Error('Product not found');
    }
    return item;
  },
  async add(name) {
    const item = await modelProduct.add(name);
    return item;
  },

  async productUpdate(name, id) {
    await this.getById(id);
    await modelProduct.productUpdate(name, id);
    const productUpdate = {
      id, 
      name,
    };
    return productUpdate;
  },

};

module.exports = serviceProduct;