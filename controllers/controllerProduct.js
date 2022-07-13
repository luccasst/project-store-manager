const serviceProduct = require('../services/serviceProduct');

const controllerProduct = {
  async getAll(req, res) {
    const itens = await serviceProduct.getAll();
   return res.status(200).json(itens);
  },
  async getById(req, res) {
    try {
      const item = await serviceProduct.getById(req.params.id);
     return res.status(200).json(item);
    } catch (error) {
     return res.status(404).json({ message: error.message });
    }
  },

  async add(req, res, next) {
    try {
      const { name } = await serviceProduct.addValidateBody(req.body);
      const item = await serviceProduct.add(name);
      return res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  },

  async productUpdate(req, res, next) {
    try {
      const { name } = await serviceProduct.addValidateBody(req.body);
      const items = await serviceProduct.productUpdate(name, req.params.id);
      return res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      await serviceProduct.delete(req.params.id);
      return res.status(204).json();
    } catch (error) {
      next(error);
    }
  },

};

module.exports = controllerProduct;