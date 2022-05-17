const mongo = require("mongoose");

const product = mongo.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
});

module.exports = mongo.model("product", product);