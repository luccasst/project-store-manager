const { Router } = require('express');
const controllerSales = require('../controllers/controllerSales');

const routerSales = Router();

routerSales.post('/', controllerSales.add);

module.exports = routerSales;