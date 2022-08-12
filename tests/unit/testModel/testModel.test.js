const connection = require('../../../models/connection/connection');
const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../models/productsModel');
const res = require('express/lib/response');
const { execute } = require('../../../models/connection/connection');

describe('test layer Model', async () => {

  describe('test producstModel', () => {
      const products = [
        {
          id: 1,
          name: "Martelo de Thor",
        },
        {
          id: 2,
          name: "Traje de encolhimento",
        },
        {
          id: 3,
          name: "Escudo do Capitão América",
        },
      ]
    

    before(() => {
      sinon.stub(connection, 'execute').resolves(products);
    });

    after(() => {
      connection.execute.restore();
    })

    it('test if return a object', async () => {
      const result = await productsModel.getAll();
      expect(result).to.be.equal(products[0]);
      })
  })
  

  describe('test error', () => {
    
    before(() => {
      sinon.stub(connection, 'execute').resolves([false]);
    })

    after(() => {
       connection.execute.restore();
    })

    it('test if return false when make a request', async () => {
      const result = await productsModel.getAll();
      expect(result).to.equal('something wrong');
    })
  })
  
  describe('test register product ', () => {
    const idInsert = { insertId: 4 }
    before(() => {
      sinon.stub(connection, 'query').resolves([idInsert]);
    })

    after(() => {
      connection.query.restore();
    })

    it('test if return the product', async () => {
        const result = await productsModel.registerProduct();
        expect(result).to.be.equal(idInsert.insertId);
      })
  })

})