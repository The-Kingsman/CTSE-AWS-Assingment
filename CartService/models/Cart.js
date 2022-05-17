const mongo = require("mongoose");

const cart = mongo.Schema({
    user_id: {
        type: String,
        required: true
    },
    products: [
        {
            product: { type: Schema.Types.ObjectId, ref: 'product', required: true },
            quantity: { type: Number, require: true }
        }
    ]
});

module.exports = mongo.model("cart", cart);