const connection = require('./connection/connection');

const getAll = async () => {
  try {
    const QUERY = 'SELECT * FROM StoreManager.products ORDER BY id;';
    const [result] = await connection.execute(QUERY);
    return result;
  } catch (erro) {
    return erro.message;
   }
};

const getProductById = async (id) => {
  try {
     const QUERY = 'SELECT * FROM StoreManager.products WHERE id = ?;';
     const [product] = await connection.query(QUERY, [id]);
     return product;
  } catch (erro) {
    return erro.message;
  }
};

const registerProduct = async (name) => {
  try {
    const QUERY = 'INSERT INTO StoreManager.products (name) VALUES (?);';
    const [register] = await connection.query(QUERY, name);
    console.log(register);
    return { id: register.insertId, name };
  } catch (erro) {
    return erro.message;
  }
};

module.exports = {
  getAll,
  getProductById,
  registerProduct,
};