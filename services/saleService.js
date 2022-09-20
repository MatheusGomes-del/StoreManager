const salesModel = require('../models/salesModel');

const createDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = date.getHours();

  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
};

const registerSale = async (sale) => {
  const date = createDate();
  const saleItem = await salesModel.registerSale(sale, date);
  
  return saleItem;
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
  getSales,
  getSaleById,
  registerSale,
};