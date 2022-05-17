const order = require('../models/Order');

const getOrderById = async (req, res) => {
  await order
    .findOne({ order_Id: req.params.id })
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

const getAllOrders = async (req, res) => {
  await order
    .find()
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

const createOrder = async (req, res) => {
  const { price, status } = req.body;
  await order
    .create({
      price: price,
      status: status,
    })
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

const deleteOrder = async (req, res) => {
  await order
    .findOneAndDelete({ order_Id: req.params.id })
    .then((result) => {
      res.json({
        result: 'success',
        data: result,
      });
    })
    .catch((error) => {
      res.json({
        result: error,
      });
    });
};

module.exports = { getAllOrders, getOrderById, createOrder, deleteOrder };
