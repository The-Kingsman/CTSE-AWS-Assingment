const product = require("../models/Product");

const getAll = async (req, res) => {
    await product
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

const getById = async (req, res) => {
    await product
        .findOne({ _id: req.params.id })
        .then((result) => {
            res.json({
                results: result,
            });
        })
        .catch((error) => {
            res.send(error);
        });
};

const create = async (req, res) => {
    await product
        .create({
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
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

const update = async (req, res) => {
    await product
        .updateOne(
            { _id: req.params.id },
            {
                name: req.body.name,
                quantity: req.body.quantity,
                price: req.body.price,
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

const deleteById = async (req, res) => {
    await product
        .deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({
                results: result,
            });
        })
        .catch((error) => {
            res.send(error);
        });
};


module.exports = { getAll, getById, create, update, deleteById };