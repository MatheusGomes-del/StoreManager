const connection = require('../../../models/connection/connection');
const sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../../services/productsService');
const res = require('express/lib/response');

describe('test layer Model', async () => {

  describe('test producstModel', () => {
      const products = [
      [
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
      ],
    ];
    

    before(() => {
        sinon.stub( service)
    });

    it('test if return a object', async () => {
         const 
      })
    })
})