import dotenv from 'dotenv-safe'
import request from 'request-promise-native'

dotenv.config()

const { npm_package_repository_url } = process.env
const apiUrl = npm_package_repository_url
  .replace('git+https://github.com/', 'https://api.github.com/repos/')
  .replace(/\.git$/, '')

export const handler = (event, context, callback) => {
  const send = body => callback(null, { statusCode: 200, body: JSON.stringify(body) })

  request({
      url: apiUrl,
      headers: { 'User-Agent': 'request' },
      json: true,
    })
    .then(data => send({ stars: data.stargazers_count }))
}
