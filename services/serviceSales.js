const Joi = require('joi');
const modelSales = require('../models/modelSales');
const { RunSchemas } = require('./validate');

const serviceSales = {
  addValidateBody: RunSchemas(
    Joi.object({
      quantity: Joi.number().integer().required().min(1),
      productId: Joi.required(),
    }),
  ),
  async getById(id) {
    const item = await modelSales.getById(id);
    if (!item || item.length === 0) {
      throw new Error('Sale not found');
    }
    return item;
  },

  async getAll() {
    const items = await modelSales.getAll();
    return items;
  },

  async add(sales) {
    const idSales = await modelSales.addProductSales();
    await Promise.all(sales.map((sale) => modelSales.add(sale)));
    const ok = {
      id: idSales,
      itemsSold: sales,
    };
    return ok;
  },

};

module.exports = serviceSales;