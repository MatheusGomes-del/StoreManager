const connection = require('./connection/connection');

const registerSale = async (sale, date) => {
  const QUERY = `INSERT INTO StoreManager.sales_products (sale_id, product_id , quantity)
  VALUE (?,?,?);`;
  const QUERY2 = 'INSERT INTO StoreManager.sales (date) VALUES(?);';
  const [saleId] = await connection.query(QUERY2, [date]);
  
  sale.forEach(async ({ productId, quantity }) => {
    await connection.query(QUERY, [saleId.insertId, productId, quantity]);  
  });

  return { id: saleId.insertId, itemsSold: sale };
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
  getSales,
  getSaleById,
  registerSale,
};
