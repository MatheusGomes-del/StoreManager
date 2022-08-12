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

module.exports = { 
  getAllProducts,
  getProductById,
};