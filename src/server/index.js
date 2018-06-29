const express = require('express')
const getPort = require('get-port')
const open = require('open')
const path = require('path')
const proxy = require('express-http-proxy')

const { PORT } = process.env
const clientDir = path.join(__dirname, '../../dist/client/')

const app = express()

app.use('/.netlify/functions/', proxy('http://localhost:9000/'))
app.use(express.static(clientDir))

getPort({ port: PORT })
  .then(port => {
    app.listen(port, () => {
      const url = `http://localhost:${port}`
      console.log(`App running on ${url}`)
      open(url)
    })
  })
