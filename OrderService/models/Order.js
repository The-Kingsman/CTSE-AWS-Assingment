const mongo = require('mongoose');

const Order = new mongo.Schema({
  order_Id: {
    type: String,
    required: true,
  },
  customer_Id: {
    type: String,
    required: true,
  },
  transaction_Id: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true,
      },
      unit: { type: Number, require: true },
    },
  ],
});

module.exports = mongo.model('order', Order);
