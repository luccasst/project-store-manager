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

  async add(req, res) {
    const item = await serviceProduct.add(req.body.name);
    return res.status(201).json(item);
  },

};

module.exports = controllerProduct;