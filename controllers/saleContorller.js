const saleService = require('../services/saleService');

/* req 06 */
const registerSale = async (req, res) => {
  const sale = await saleService.registerSale(req.body);

  res.status(201).json(sale);
};

const getAllSales = async (req, res) => {
  const { message, code, result } = await saleService.getSales();
  if (message) return res.status(code).json(message);

  return res.status(code).json(result);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { message, code, chooseSale } = await saleService.getSaleById(id);

  if (message) return res.status(code).json({ message });

  return res.status(200).json(chooseSale);
};
module.exports = {
  registerSale,
  getAllSales,
  getSaleById,
};