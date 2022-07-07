const { Router } = require('express');
const controllerProduct = require('../controllerProduct');

const routerProduct = Router();

routerProduct.get('/', controllerProduct.list);
routerProduct.get('/:id', controllerProduct.getById);

module.exports = routerProduct;