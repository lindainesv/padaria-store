const { salesService } = require('../services');

const listSales = async (_req, res) => {
  const { message } = await salesService.findAll();

  res.status(200).json(message);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findById(id);
  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const createSale = async (req, res) => {
  const arraySales = req.body;
  const { type, message } = await salesService.createNewSale(arraySales);
  if (type) {
    return res.status(type).json({ message });
  }
  return res.status(201).json(message);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const arraySales = req.body;
  const { type, message } = await salesService.updateSale(id, arraySales);
  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteSale(id);
  if (type) return res.status(type).json({ message });

  res.status(200).json(message);
};

const updateQuantity = async (req, res) => {
  const { saleId, productId } = req.params;
  const { quantity } = req.body;

  const { type, message } = await salesService.updateQuantity(saleId, productId, quantity);

  const resultMessage = typeof message === 'string' ? { message } : message;

  return res.status(type).json(resultMessage);
};


module.exports = {
  getSalesById,
  listSales,
  createSale,
  updateSale,
  deleteSale,
  updateQuantity
};