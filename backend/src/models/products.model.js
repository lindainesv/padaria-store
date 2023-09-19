// const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return result;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return product;
};

const insert = async (name) => {
  await connection.execute(
    'INSERT INTO products (name) VALUE (?)',
    [name],
  );

  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE name = ?',
    [name],
  );

  return product;
};

const update = async (productId, name) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, productId],
  );
  return findById(productId);
};

const exclude = async (productId) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [productId],
  );
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  exclude
};