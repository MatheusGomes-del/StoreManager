const connection = require('./connection/connection');

const getAll = async () => {
  const QUERY = 'SELECT * FROM StoreManager.products ORDER BY id;';
  const [result] = await connection.execute(QUERY);

  return result;
};

const getProductById = async (id) => {
  const QUERY = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [product] = await connection.query(QUERY, [id]);
  return product;
};

module.exports = {
  getAll,
  getProductById,
};