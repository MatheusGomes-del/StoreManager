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
  const { insertId } = product;
  return { id: insertId, name };
};

const updateProduct = async (id, name) => {
  const result = await productsModel.getProductById(id);
  
  if (!name) {
    return { code: 400, message: '"name" is required' };
  }
  
  if (name.length < 5) {
    return { code: 422, message: '"name" length must be at least 5 characters long' };
  }

  if (!id || result.length === 0) {
     return { code: 404, message: 'Product not found' };
  }
  const updatedProduct = await productsModel.updateProduct(id, name);

  return { code: 200, updatedProduct };
};

module.exports = {
  getAllProducts,
  getProductById,
  registerProduct,
  updateProduct,
};