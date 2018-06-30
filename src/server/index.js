const bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const getPort = require('get-port')
const open = require('open')
const path = require('path')
const proxy = require('express-http-proxy')
const url = require('url')

const { PORT } = process.env
const clientDir = path.join(__dirname, '../../dist/client/')
const functionsDir = path.join(__dirname, '/functions/')
const functionsUrl = 'http://localhost:9000'

const app = express()

/**
 * Mimic Netlify functions
 * @see https://www.netlify.com/docs/functions/
 */
app.use('/.netlify/functions/', proxy(functionsUrl))

/**
 * Parse form data (`application/x-www-form-urlencoded`)
 * @see https://www.npmjs.com/package/body-parser#expressconnect-top-level-generic
 */
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Mimic Netlify form handling
 * @see https://www.netlify.com/docs/form-handling/
 */
app.post('*', (req, res,) => {
  const data = req.body
  const referer = url.parse(req.get('Referer')).path
  const target = req.url

  console.log(`Form posted to '${target}' with data:`, data)

  const hasSubmissionHandler = fs.existsSync(path.join(functionsDir, 'submission-created.js'))
  if (hasSubmissionHandler) {
    const handlerUrl = `${functionsUrl}/submisison-created`
    console.log(`@todo: pass data to ${handlerUrl}`)
  }

  if (referer === target) {
    res.sendFile('thank-you.html', { root: path.join(__dirname, '/static') })
  } else {
    res.redirect(302, target)
  }
})

/**
 * Mimic Netlify static hosting
 */
app.use(express.static(clientDir))


getPort({ port: PORT })
  .then(port => {
    app.listen(port, () => {
      const url = `http://localhost:${port}`
      console.log(`App running on ${url}`)
      open(url)
    })
  })
