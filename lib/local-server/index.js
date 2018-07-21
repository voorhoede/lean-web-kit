const bodyParser = require('body-parser')
const dotenv = require('dotenv-safe')
const express = require('express')
const fs = require('fs')
const getPort = require('get-port')
const path = require('path')
const proxy = require('express-http-proxy')
const request = require('request-promise-native')
const url = require('url')

const { PORT } = process.env
const rootDir = path.join(__dirname, '../..')
const clientDir = path.join(rootDir, '/dist/client/')
const functionsDir = path.join(rootDir, '/src/server/functions/')
const functionsUrl = 'http://localhost:9000'

dotenv.config({ path: path.resolve(rootDir, '.env') })

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
  /**
   * mock request to `submission-created` handler
   * @see https://www.netlify.com/docs/functions/#event-triggered-functions
   */
  const hasSubmissionHandler = fs.existsSync(path.join(functionsDir, 'submission-created.js'))
  if (hasSubmissionHandler) {
    console.log(`Using 'submission-created' handler to handle form submission.`)
    request.post(`${functionsUrl}/submission-created`, {
      json: true,
      body: {
        payload: {
          number: 1,
          title: '',
          created_at: new Date(),
          data,
        },
      },
    })
    .catch(err => console.error('Error from submission-created', err))
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
      // open(url)
    })
  })
