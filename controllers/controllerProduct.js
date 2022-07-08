const serviceProduct = require('../services/serviceProduct');
const productService = require('../services/serviceProduct');

const controllerProduct = {
  async list(req, res) {
    const itens = await productService.list();
    res.status(200).json(itens);
  },
  async getById(req, res) {
    try {
      const item = await productService.getById(req.params.id);
      res.status(200).json(item);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  async add(req, res) {
    const item = await serviceProduct.add(req.body.name);
    return res.status(201).json(item);
  },

};

module.exports = controllerProduct;