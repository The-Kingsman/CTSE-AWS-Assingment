const order = require('../models/Order');

const getOrderById = async (req, res) => {
  await order
    .findOne({ user_id: req.params.id })
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

const addOrder = async (req, res) => {
  const { user_id, products } = req.body;
  const orderExist = await order.findOne({ user_id: user_id });

  if (orderExist) {
    await order
      .updateOne(
        { user_id: user_id },
        {
          $addToSet: { products: products },
        }
      )
      .then((result) => {
        res.json({
          results: result,
        });
      });
  } else {
    await order
      .create({
        user_id: user_id,
        products: products,
      })
      .then((result) => {
        res.json({
          results: result,
        });
      })
      .catch((error) => {
        res.status(400).send({
          error: error,
        });
      });
  }
};

const clearOrder = async (req, res) => {
  await order
    .updateOne(
      { user_id: req.params.id },
      {
        products: [],
      }
    )
    .then((result) => {
      res.json({
        results: result,
      });
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = { getOrderById, addOrder, clearOrder };
