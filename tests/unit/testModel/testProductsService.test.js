const sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../../services/productsService');
const productsModel = require('../../../models/productsModel');

const mock = require('../mock');
const res = require('express/lib/response');

describe('Test Service', () => {
  
  
  describe('Test function getAll service', () => {
    afterEach(sinon.restore);

    it('test if return all products', async () => {

      const allProducts = mock.allProducts;
      sinon.stub(productsModel, 'getAll').resolves(allProducts);
      const allProduct = await productsService.getAllProducts();
      expect(allProduct).to.be.deep.equal(allProducts);
    });

    it('test if return code 404', async () => {
      sinon.stub(productsModel, 'getAll').resolves(undefined);
      
      const mockError = mock.getByIdError;
      const error = await productsService.getAllProducts();

      expect(error).to.be.deep.equal(mockError);
    });
  });

  describe('Teste Funtion getById', () => {
    afterEach(sinon.restore);

    it('test if return the product choose by id', async () => {
      
      const getById = mock.getById;
      const mockProduct = [{
        "id": 1,
        "name": "Martelo de Thor"
      }];
      
      sinon.stub(productsModel, 'getProductById').resolves(mockProduct);
      const product = await productsService.getProductById(1);
      expect(product).to.be.deep.equal(getById);
    });


    it('test if return error', async () => {

      sinon.stub(productsModel, 'getProductById').resolves(false);
      
      const mockError = mock.getByIdError;
      const error = await productsService.getProductById();

      expect(error).to.be.deep.equal(mockError);
    });
  });

  describe('Teste Function registerProduct', () => {
    
    afterEach(sinon.restore);

    it('test if register Product', async () => {
      
      const register = mock.registerMock;
      sinon.stub(productsModel, 'registerProduct').resolves(register);

      const result = await productsService.registerProduct(register.name)
      expect(result).to.be.deep.equal(register);
    });
  });

  describe('Test Function  updateProduct', () => {

    afterEach(sinon.restore);
   
    it('Test if return the product sent', async () => {
       
      const product = mock.updateProduct;
      sinon.stub(productsModel, 'updateProduct').resolves(product);
      const mockService = { code: 200, updatedProduct: product };
      const result = await productsService.updateProduct(product.id, product.name);
      expect(result).to.be.deep.equal(mockService);
    });


    it('Test if return name required', async () => {
      const product = mock.updateProduct;
      sinon.stub(productsModel, 'updateProduct').resolves(product);
      const mockService = { code: 400, message: '"name" is required' };
      const result = await productsService.updateProduct(product.id);
      expect(result).to.be.deep.equal(mockService);
    });

    it('Test if return 404 with name.length less than five', async () => {
      const product = { id: 3, name: 'arco' }
      sinon.stub(productsModel, 'updateProduct').resolves(product);
      const mockService = { code: 422, message: '"name" length must be at least 5 characters long' };
      const result = await productsService.updateProduct(product.id, product.name);
      expect(result).to.be.deep.equal(mockService);
    });

    it("Teste if return 404 if the id doesn't exist ", async () => {
      const product = { id: null, name: 'cadeira' }
      sinon.stub(productsModel, 'updateProduct').resolves(product);
      const mockService = { code: 404, message: 'Product not found' };
      const result = await productsService.updateProduct(product.id, product.name);
      expect(result).to.be.deep.equal(mockService);
    });
  });

  describe('Test function deleteProduct', () => {
     
    afterEach(sinon.restore);

    it('Test if return code 204', async () => {
      const code = { code: 204 };
      sinon.stub(productsModel, 'deleteProduct').resolves(4);

      const result = await productsService.deleteProduct(4);
      expect(result).to.be.deep.equal(code);
    });
  });
});