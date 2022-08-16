const productsService = require('../services/productsService');
// const middlawareProducts = require('../middlewares/productsMiddleware/getProducts');

const getAllProducts = async (req, res) => {
  const result = await productsService.getAllProducts();
    
  res.status(200).json(result);
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  const { message, code, product } = await productsService.getProductById(Number(id));
  
  if (message) return res.status(code).json({ code, message });
    
  return res.status(code).json(product[0]);
};

const registerProduct = async (req, res) => {
  const { name } = req.body;
  const response = await productsService.registerProduct(name); 

  res.status(201).json(response);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { message, code, updatedProduct } = await productsService.updateProduct(id, name);

  if (message) return res.status(code).json({ message });

  return res.status(code).json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  const { message, code } = await productsService.deleteProduct(id);

   if (message) return res.status(code).json({ message });

  return res.status(code).end();
};

module.exports = { 
  getAllProducts,
  getProductById,
  registerProduct,
  updateProduct,
  deleteProduct,
};