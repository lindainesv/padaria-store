const joi = require('joi');

const idSchema = joi.number().integer().min(1).required();

const addProductSchema = joi.object({
  name: joi.string().min(5).required(),
});

const addSale = joi.object({
  productId: joi.number().required(),
  quantity: joi.number().min(1).required(),
});

module.exports = {
  idSchema,
  addProductSchema,
  addSale,
};