const cart = require("../models/Cart");

const getById = async (req, res) => {
    await cart
        .findOne({ user_id: req.params.id })
        .then((result) => {
            res.json({
                results: result,
            });
        })
        .catch((error) => {
            res.send(error);
        });
};

const clearCart = async (req, res) => {
    await cart
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



module.exports = { getById, clearCart };