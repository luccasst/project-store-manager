const Joi = require('joi');
const modelProduct = require('../models/modelProduct');
const { RunSchemas } = require('./validate');

const serviceProduct = {
  addValidateBody: RunSchemas(Joi.object({
    name: Joi.string().required().min(5),
  })),

  async getAll() {
    const itens = await modelProduct.getAll();
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