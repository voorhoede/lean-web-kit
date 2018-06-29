const express = require('express')
const path = require('path')
const proxy = require('express-http-proxy')

const { PORT } = process.env
const clientDir = path.join(__dirname, '../../dist/client/')

const app = express()

app.use('/.netlify/functions/', proxy('http://localhost:9000/'))
app.use(express.static(clientDir))

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`))
