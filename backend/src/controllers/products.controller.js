const { productsService } = require('../services');

const listProducts = async (_req, res) => {
  const { message } = await productsService.findAll();

  res.status(200).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.createProduct(name);

  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateProduct(id, name);

  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);

  if (type) return res.status(404).json({ message });
  res.status(204).json(message);
  console.log(message);
};

module.exports = {
  getProductsById,
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct
};