const quantityIsRequired = async (req, res, next) => {
  const quantity = req.body;
  console.log(quantity);

  console.log(('quantity' in quantity));

  if (!('quantity' in quantity)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (quantity.quantity <= 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  return next();
};

module.exports = {
  quantityIsRequired,
};