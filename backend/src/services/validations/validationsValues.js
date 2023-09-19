const { idSchema, addProductSchema, addSale } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  return { type: null, message: '' };
};

const validateNewProduct = (name) => {
  const { error } = addProductSchema.validate({ name });
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

const validateSalesValues = (arraySales) => {
  const errorRequired = arraySales.map((sale) => {
    const { error } = addSale.validate(sale);
    if (error) return { type: 'INVALID_VALUES', message: error.message };
    return { type: null, message: '' };  
  });

  return errorRequired;
};

module.exports = {
  validateId,
  validateNewProduct,
  validateSalesValues,
};