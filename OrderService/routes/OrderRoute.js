const controller = require('../controllers/OrderContoller');
const router = require('express').Router();

router.route('/:id').get(controller.getOrderById);

router.route('/add_order').post(controller.addOrder);

module.exports = router;
