const productsService = require('../../services/productsService');

const validateAll = (req, res, next) => {
  const { id } = req.params;

  if (id) {
    const products = productsService.getAll(id);
    res.status(200).json(products);
  }

  if (!id) return res.status(404).json({ message: 'Product not found' });
  
  next();
};

module.exports = {
  validateAll,
};