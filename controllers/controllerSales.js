const serviceSales = require('../services/serviceSales');

const controllerSales = {
  async getAll(req, res) {
    const item = await serviceSales.getAll();
    return res.status(200).json(item);
  },
  
  async add(req, res, next) {
    try {
      await Promise.all(req.body.map((each) => serviceSales.addValidateBody(each)));
      await Promise.all(req.body.map((each) => serviceSales.getById(each.productId)));
      const item = await serviceSales.add(req.body);
      return res.status(201).json(item);
    } catch (error) {
      next(error);
    }
  },

};

module.exports = controllerSales;