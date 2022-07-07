const productService = require('../services/serviceProduct');

const controllerProduct = {
  async list(req, res) {
    const itens = await productService.list();
    res.status(200).json(itens);
  },
  async getById(req, res) {
    try {
      const item = await productService.productId(req.params.id);
      res.status(200).json(item);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = controllerProduct;