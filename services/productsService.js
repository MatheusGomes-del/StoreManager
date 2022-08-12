const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const product = await productsModel.getAll();

  if (product === undefined) { 
    return { code: 404, message: 'Product not found' };
  }

  return product;
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(Number(id));
 
  if (!product[0]) { 
    return { code: 404, message: 'Product not found' };
  }

  return { code: 200, product };
};

const registerProduct = async (name) => {
  const product = await productsModel.registerProduct(name);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  registerProduct,
};