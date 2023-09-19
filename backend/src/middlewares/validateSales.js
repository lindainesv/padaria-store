const validateProductId = require('./validateProductId');
const validateQuantity = require('./validateQuantity');

const validateSales = (req, res, next) => {
  const arraySales = req.body;
  const status = validateProductId(arraySales).status || validateQuantity(arraySales).status;
  const message = validateProductId(arraySales).message || validateQuantity(arraySales).message;
  if (message) return res.status(status).json({ message });
  next();
};

module.exports = {
  validateSales,
};