const user = require("../models/User");

const getAll = async (req, res) => {
    await user
        .find()
        .select("-password")
        .then((result) => {
            res.json({
                results: result,
            });
        })
        .catch((error) => {
            res.send(error);
        });
};

const getByID = async (req, res) => {
    await user
        .find({ _id: req.params.id })
        .select("-password")
        .then((result) => {
            res.json({
                result: result,
            });
        })
        .catch();
};

const create = async (req, res) => {
    const { name, email, age, contact, password } = req.body;
    await user.create({
        name: name,
        email: email,
        age: age,
        contact: contact,
        password: password,
    })
        .then(result => {
            res.json({
                result: result
            })
        })
        .catch(error => {
            res.json({
                result: error
            });
        });
};

const update = async (req, res) => {
    const { name, email, age, contact, password } = req.body;
    await user.findOneAndUpdate({ _id: req.params.id }, {
        name: name,
        email: email,
        age: age,
        contact: contact,
        password: password,
    })
        .then(result => {
            return user.findOne({ _id: result._id })
        })
        .then(result => {
            res.json({
                result: result
            })
        })
        .catch(error => {
            res.json({
                result: error
            });
        });
};

const _delete = async (req, res) => {
    await user.findOneAndDelete({ _id: req.params.id })
        .then(result => {
            res.json({
                result: "success",
                data: result
            });
        })
        .catch(error => {
            res.json({
                result: error
            });
        });
};

const signIn = async (req, res) => {
    const { email, password } = req.body;
    await user.findOne({ email: email })
        .then(result => {
            if (result) {
                if (result.password == password) {
                    res.json({
                        result: result
                    })
                } else {
                    res.json({
                        result: "password incorrect"
                    })
                }
            } else {
                res.json({
                    result: "User does not exist"
                })
            }
        })
        .catch(error => {
            res.json({
                result: error
            })
        });
};

module.exports = { getAll, getByID, create, update, _delete, signIn };