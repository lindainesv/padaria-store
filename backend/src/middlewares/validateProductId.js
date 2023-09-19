const validateProductId = (arraySales) => {
  const ids = arraySales.map((sale) => sale.productId);
  if (ids.includes(undefined)) return { status: 400, message: '"productId" is required' };
  return { status: null, message: '' };
};

module.exports = validateProductId;