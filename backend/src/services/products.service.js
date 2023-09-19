const { productsModel } = require('../models');
// const schema = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (productsId) => {
  const products = await productsModel.findById(productsId);
  if (!products) return { type: 404, message: 'Product not found' };

  return { type: null, message: products };
};

const createProduct = async (name) => {
  const newProduct = await productsModel.insert(name);

  return { type: null, message: newProduct };
};

const updateProduct = async (id, name) => {
  const product = await productsModel.findById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  const updatedProduct = await productsModel.update(id, name);
  return { type: null, message: updatedProduct };
};

const deleteProduct = async (id) => {
  const product = await productsModel.findById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  await productsModel.exclude(id);
  return { type: 204, message: 'Product deleted' };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateProduct,
  deleteProduct
};