const mongo = require('mongoose');

const Order = new mongo.Schema({
  user_id: {
    type: String,
  },
  products: [
    {
      product: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'product',
      },
      quantity: { type: Number },
    },
  ],
});

module.exports = mongo.model('order', Order);
