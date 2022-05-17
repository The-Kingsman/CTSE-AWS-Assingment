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
            res.status(400).send(error);
        });
};

const addItem = async (req, res) => {
    const { product, quantity } = req.body;
    const cartExist = await cart.findOne({ user_id: req.params.id });

    if (cartExist) {
        await cart.updateOne({ user_id: req.params.id }, {
            $addToSet: { products: { product: product, quantity: quantity } }
        })
            .then((result) => {
                res.json({
                    results: result,
                });
            })
    } else {
        await cart.create({ 
            user_id: req.params.id,
            products: [{ product: product, quantity: quantity }] 
        })
        .then((result) => {
            res.json({
                results: result,
            });
        })
        .catch(error => {
            res.status(400).send({
                error: error
            })
        });
    }
}

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



module.exports = { getById, addItem, clearCart };