const serviceSales = require('../services/serviceSales');
const serviceProduct = require('../services/serviceProduct');

const controllerSales = {
  async getAll(req, res) {
    const items = await serviceSales.getAll();
    return res.status(200).json(items);
  },

  async getById(req, res, next) {
    try {
      const items = await serviceSales.getById(req.params.id);
      return res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  },
  
  async add(req, res, next) {
    try {
      await Promise.all(req.body.map((each) => serviceSales.addValidateBody(each)));

      await Promise.all(req.body.map((each) => serviceProduct.getById(each.productId)));

      const item = await serviceSales.add(req.body);
      return res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  },

  async updates(req, res, next) {
    try {
      await Promise.all(req.body.map((eachOne) => serviceSales.addValidateBody(eachOne)));
      await Promise.all(req.body.map((eachOne) => serviceProduct.getById(eachOne.productId)));
      const item = await serviceSales.updates(req.body, req.params.id);
      return res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      await serviceSales.delete(req.params.id);
      return res.status(204).json();
    } catch (error) {
      next(error);
    }
  },

};

module.exports = controllerSales;