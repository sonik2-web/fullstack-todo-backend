const express = require('express')
const mongoose = require('mongoose')
const cors = require ("cors")

const routes = require('./routes/todoroutes')

require('dotenv').config()

const app = express ()

const PORT = process.env.port || 5000

app.use(express.json ())
app.use(cors())





require('dotenv').config(); // Make sure you have dotenv installed and required at the top
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log('Connected To MongoDB...'))
.catch((err) => console.log(err))







app.use(routes)


app.listen(PORT, () => console.log('Listening on :${PORT}'))
app.listen(5000);