const sinon = require('sinon');
const { expect } = require('chai');
const ProductsController = require('../../controllers/productsController');
const productsService = require('../../services/productsService');
const { execute } = require('../../models/connection/connection');
const mock = require('./mock');


describe('Teste ProductsController', () => {
  
  describe('Test Function getAllProducts', () => {
    
    afterEach(sinon.restore);

   /*  it('Test if return all products', async () => {
      const allProducts = mock.allProducts;
      sinon.stub(productsService, 'getAllProducts').resolves(allProducts);

      const result = await ProductsController.getAllProducts();
      expect(result).to.be.equal(allProducts);
    }); */
  });
});