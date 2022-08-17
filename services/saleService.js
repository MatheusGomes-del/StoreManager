const salesModel = require('../models/salesModel');

/* req 06 */
const registerSale = async (saleSold) => {
  const saleId = await salesModel.createSaleId();
  
  return { id: saleId.id, saleId };
};

const getSales = async () => {
  const result = await salesModel.getSales();

  if (!result || result === undefined) {
    return { code: 404, message: 'Sale not found' };
  }

  return { code: 200, result };
};

const getSaleById = async (id) => {
  const chooseSale = await salesModel.getSaleById(id);
  
  if (chooseSale.length === 0 || chooseSale === undefined || !chooseSale) {
    return { code: 404, message: 'Sale not found' };
  }

  return { code: 200, chooseSale };
};
 
module.exports = { 
  registerSale,
  getSales,
  getSaleById,
};