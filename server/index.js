const express = require('express')
const router = require('./routes')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 9000


mongoose.connect(process.env.DB_CONNECT)
	.then(()=> console.log('Database connected'))
	.catch(err => console.log(err))

app.use('/api', router)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})