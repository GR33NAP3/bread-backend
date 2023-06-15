const express = require('express')
const mongoose = require('mongoose')
const coors = require('cors')
require('dotenv').config()

const breadRoutes = require('./routes/bread')

const app = express()

//middlewares
app.use(express.json())

//routes
app.use('/breads',breadRoutes)

const PORT = process.env.PORT || 8080

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


app.listen(PORT, console.log(`listining on port ${PORT}`))