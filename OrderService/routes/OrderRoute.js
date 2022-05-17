const controller = require('../controllers/OrderContoller');
const router = require('express').Router();

router.route('/').get(controller.getAllOrders);

router.route('/:id').get(controller.getOrderById);

router.route('/').post(controller.createOrder);

router.route('/:id').delete(controller.deleteOrder);

module.exports = router;
