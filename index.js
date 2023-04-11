const express = require('express')
const app = express()
const router = require('./routes/employee.js')
const body = require('body-parser')

app.use(body.json())
app.use("/api",router)

app.listen(3000)

