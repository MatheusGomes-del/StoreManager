const express = require('express');
const body = require('body-parser');
const productsController = require('./controllers/productsController');

const app = express();
app.use(body.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAllProducts);
app.get('/products/:id', productsController.getProductById);
app.post('/products', productsController.registerProduct);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;