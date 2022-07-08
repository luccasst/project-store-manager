const { Router } = require('express');
const controllerProduct = require('../controllers/controllerProduct');

const routerProduct = Router();

routerProduct.get('/', controllerProduct.list);
routerProduct.get('/:id', controllerProduct.getById);
routerProduct.post('/', controllerProduct.add);

module.exports = routerProduct;