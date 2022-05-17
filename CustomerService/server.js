const express = require('express')
const mongo = require('mongoose')
const router = express.Router()
const app = express()
require('dotenv').config()

const UserRoute = require('./routes/UserRoute')

const cors = require('cors')

app.use(cors());
app.use(express.json());

const port = process.env.PORT
const url = process.env.URL

mongo
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((err) => console.log(err))

const connection = mongo.connection

connection.once('open', () => {
    console.log('Database connected!')
})

router.use('/user', UserRoute)

app.use('/api', router)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})