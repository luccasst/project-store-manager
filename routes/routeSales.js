const { Router } = require('express');
const controllerSales = require('../controllers/controllerSales');

const routerSales = Router();

routerSales.get('/:id', controllerSales.getById);
routerSales.get('/', controllerSales.getAll);
routerSales.post('/', controllerSales.add);

module.exports = routerSales;