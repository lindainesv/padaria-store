const Router = require('express');
const { productsController } = require('../controllers');
const { validateNewsProducts } = require('../middlewares/validateNewsProducts');

const router = Router();

router.get('/', productsController.listProducts);

router.get('/:id', productsController.getProductsById);

router.post('/', validateNewsProducts, productsController.createProduct);

router.put('/:id', validateNewsProducts, productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;