const express = require('express');
const body = require('body-parser');
const productsController = require('./controllers/productsController');
const getProductsMiddle = require('./middlewares/productsMiddleware/getProductsMiddle');
const saleController = require('./controllers/saleContorller');

const app = express();
app.use(body.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAllProducts);
app.get('/products/:id', productsController.getProductById);
app.put('/products/:id', productsController.updateProduct);
app.delete('/products/:id', productsController.deleteProduct);
app.post('/products', getProductsMiddle.validateProduct, productsController.registerProduct);
// app.post('/sales', saleController.registerSale);
app.get('/sales', saleController.getAllSales);
app.get('/sales/:id', saleController.getSaleById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;