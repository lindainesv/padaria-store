const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
  `SELECT 
    table1.sale_id AS saleId,
    table2.date,
    table1.product_id AS productId,
    table1.quantity
  FROM
    sales_products AS table1
      INNER JOIN
    sales AS table2 ON table2.id = table1.sale_id
  ORDER BY table1.sale_id , table1.product_id`,
  );

  return result;
};

const findById = async (saleId) => {
  const [sale] = await connection.execute(
  `SELECT 
    table2.date, table1.product_id AS productId, table1.quantity
  FROM
    sales_products AS table1
        INNER JOIN
    sales AS table2 ON table2.id = table1.sale_id
  WHERE
    table1.sale_id = ?
  ORDER BY table1.sale_id , table1.product_id`,
  [saleId],
  );
  
  return sale;
};

const insertSale = async (arraySales) => {
  const [sale] = await connection.execute('INSERT INTO sales() VALUES()');

  await Promise.all(arraySales.map(({ productId, quantity }) => (connection.execute(
    'INSERT INTO sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)',
    [sale.insertId, productId, quantity],
  ))));

  return sale.insertId;
};

const updateSale = async (saleId, arraySales) => {
  await connection.execute('DELETE FROM sales_products WHERE sale_id = ?', [saleId]);

  await Promise.all(arraySales.map(({ productId, quantity }) => (connection.execute(
    'INSERT INTO sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)',
    [saleId, productId, quantity],
  ))));
};

const deleteSale = async (saleId) => {
  await connection.execute('DELETE FROM sales_products WHERE sale_id = ?', [saleId]);
  await connection.execute('DELETE FROM sales WHERE id = ?', [saleId]);
};

module.exports = {
  findAll,
  findById,
  insertSale,
  updateSale,
  deleteSale
};