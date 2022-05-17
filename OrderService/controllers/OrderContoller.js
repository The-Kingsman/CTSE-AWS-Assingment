const order = require('../models/Order');

const getById = async (req, res) => {
  await order
    .findOne({ orderId: req.params.id })
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};
