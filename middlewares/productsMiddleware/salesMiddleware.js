const productModel = require('../../models/productsModel');

const validateProductId = async (req, res, next) => {
  const sales = req.body;
  const validation = sales.some(({ productId }) => !productId);
  
  const product = sales.map(async ({ productId }) => {
    const result = await productModel.getProductById(productId);
    return result[0];
  });

  const result = await Promise.all(product);
  if (validation) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (result.includes(undefined)) {
    return res.status(404).json({ message: 'Product not found' });
  }

  if (product === undefined || !product) {
    return res.status(404).json({ message: 'Product not found' });
  } 

  next();
};

function validationQuantity(req, res, next) {
  return req.body.find((item) => item.quantity <= 0
    && res.status(422).json({
      message: '"quantity" must be greater than or equal to 1' })) || next();
}

function validationQuantityTrue(req, res, next) {
  return req.body.find((item) => !item.quantity
  && res.status(400).json({ message: '"quantity" is required' })) || next();
}

module.exports = {
  validateProductId,
  validationQuantity,
  validationQuantityTrue,
};