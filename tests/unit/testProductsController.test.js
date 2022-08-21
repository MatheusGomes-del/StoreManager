const sinon = require('sinon');
const { expect } = require('chai');
const ProductsController = require('../../controllers/productsController');
const productsService = require('../../services/productsService');
const mock = require('./mock');


describe('Teste ProductsController', () => {
  
  const response = {};
  const request = {};
  const allProducts = mock.allProducts;
  const getById = mock.getById;
  const registerMock = mock.registerMock;

  before(() => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    request.params = { id: 3 };
    request.body = {};
    sinon.stub(productsService, 'getAllProducts').returns(allProducts);
    sinon.stub(productsService, 'getProductById').returns(getById);
    sinon.stub(productsService, 'registerProduct').returns(registerMock);
  });

  after(() => {
    productsService.getAllProducts.restore();
    productsService.getProductById.restore();
    productsService.registerProduct.restore();
  });
  
  describe('Test Function getAllProducts', () => {

   it('Test if return all products', async () => {
     await ProductsController.getAllProducts(request, response);
     expect(response.status.calledWith(200)).to.be.equal(true);
     expect(response.json.calledWith(allProducts)).to.be.equal(true);
    });
  });

  describe('Test Function getProductsById', () => {
    
    it('Test if return the product choose', async () => {
      await ProductsController.getProductById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(getById.product[0])).to.be.equal(true);
    });
  });

  /* describe('Test Function getProducstById message', () => {
    
    beforeEach(sinon.restore);

    it('Test if return the message', async () => {
      const message = { message: 'Product not found' };
      sinon.stub(productsService, 'getProductById').returns(message);
      await ProductsController.getProductById(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
      expect(response.json.calledWith({ code: 404, message })).to.be.equal(true);
    });
  }); */

  describe('Test Function register', () => {
    
    it('Test if return the register product', async () => {
      await ProductsController.registerProduct(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
      expect(response.json.calledWith(registerMock)).to.be.equal(true);
    });
  });

  describe('', () => {
    
    it('', () => {

    });
  });
});