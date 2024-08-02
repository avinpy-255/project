const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();
require("./Model/db")

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})