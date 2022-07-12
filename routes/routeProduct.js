const { Router } = require('express');
const controllerProduct = require('../controllers/controllerProduct');

const routerProduct = Router();

routerProduct.get('/', controllerProduct.getAll);
routerProduct.get('/:id', controllerProduct.getById);
routerProduct.put('/:id', controllerProduct.productUpdate);
routerProduct.post('/', controllerProduct.add);

module.exports = routerProduct;