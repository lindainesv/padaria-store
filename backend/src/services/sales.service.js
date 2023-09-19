const { salesModel } = require('../models');
const { validateSalesValues } = require('./validations/validationsValues');

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { type: null, message: sales };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (sale.length === 0) return { type: 404, message: 'Sale not found' };

  return { type: null, message: sale };
};

const createNewSale = async (arraySales) => {
  const errorValues = validateSalesValues(arraySales);
  if (errorValues.type) return errorValues;

  try {
    const newSaleId = await salesModel.insertSale(arraySales);
    return { type: null, message: { id: newSaleId, itemsSold: arraySales } };
  } catch (error) {
    return { type: 404, message: 'Product not found' };
  }
};

const updateSale = async (saleId, arraySales) => {
  const errorValues = validateSalesValues(arraySales);
  if (errorValues.type) return errorValues;

  try {
    await salesModel.updateSale(saleId, arraySales);
    return { type: null, message: { id: saleId, itemsSold: arraySales } };
  } catch (error) {
    return { type: 404, message: 'Sale not found' };
  }
};

const deleteSale = async (saleId) => {
  try {
    await salesModel.deleteSale(saleId);
    return { type: null, message: 'Deleted sale successfully' };
  } catch (error) {
    return { type: 404, message: 'Sale not found' };
  }
};

module.exports = {
  findAll,
  findById,
  createNewSale,
  updateSale,
  deleteSale
};