const connection = require('./connection/connection');

const getAll = async () => {
  try {
    const QUERY = 'SELECT * FROM StoreManager.products ORDER BY id;';
    const [result] = await connection.execute(QUERY);

    if (!result) {
      throw new Error('something wrong');
    }

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
    const [{ insertId }] = await connection.query(QUERY, name);

    return { insertId, name };
  } catch (erro) {
    return erro.message;
  }
};

const updateProduct = async (id, name) => {
  try { 
    const QUERY = `UPDATE StoreManager.products
         SET name = ? WHERE id = ?;`;
         await connection.execute(QUERY, [name, id]);
         return { id, name };
  } catch (erro) {
    return erro.message;
  }
};

const deleteProduct = async (id) => {
    const QUERY = 'DELETE FROM StoreManager.products WHERE id = ?;';
    const result = await connection.execute(QUERY, [id]);
    return result;
};

module.exports = {
  getAll,
  getProductById,
  registerProduct,
  updateProduct,
  deleteProduct,
};