const mongo = require('mongoose')

const user = mongo.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String
    },
    contact: {
        type: String
    },
    password: {
        type: String
    },
})
module.exports = mongo.model('user', user)
