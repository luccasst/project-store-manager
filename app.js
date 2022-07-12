const express = require('express');
const routerProduct = require('./routes/routeProduct');
const routerSales = require('./routes/routeSales');
const middlewareError = require('./middlewares/middlewareError');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routerProduct);
app.use('/sales', routerSales);
app.use(middlewareError);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;