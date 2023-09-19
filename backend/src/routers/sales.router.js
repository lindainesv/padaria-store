const Router = require('express');
const { salesController } = require('../controllers');
const { validateSales } = require('../middlewares/validateSales');
const quantityValidation = require('../middlewares/quantityValidation');

const router = Router();

router.get('/', salesController.listSales);

router.get('/:id', salesController.getSalesById);

router.post('/', validateSales, salesController.createSale);

router.put('/:id', validateSales, salesController.updateSale);

router.delete('/:id', salesController.deleteSale);

router.put('/:saleId/products/:productId/quantity',
  quantityValidation.quantityIsRequired,
  salesController.updateQuantity
);

module.exports = router;