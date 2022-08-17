const connection = require('./connection/connection');

const registerSale = async (id, { productId, quantity }) => { 
  const QUERY = `INSERT INTO StoreManager.sales_products 
  (sale_id, product_id, quantity) VALUES (?, ?, ?)`;

  await connection.query(QUERY, [id, productId, quantity]);
};

const getSales = async () => {
  const QUERY = `SELECT S.id AS saleId, S.date, SP.product_id AS productId, SP.quantity FROM 
   StoreManager.sales AS S INNER JOIN StoreManager.sales_products
   AS SP ON S.id = SP.sale_id`;
  const [result] = await connection.execute(QUERY);
  return result;
};

const getSaleById = async (id) => {
  const QUERY = `SELECT S.date, SP.product_id AS productId, SP.quantity FROM 
   StoreManager.sales AS S INNER JOIN StoreManager.sales_products
   AS SP ON S.id = SP.sale_id WHERE S.id = ? ORDER BY S.id ASC, SP.product_id;`;
  
  const [result] = await connection.execute(QUERY, [id]);

  return result;
};

module.exports = {
  registerSale,
  getSales,
  getSaleById,
};
