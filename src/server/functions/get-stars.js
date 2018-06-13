import dotenv from 'dotenv'
import request from 'request-promise-native'

dotenv.config()

export const handler = (event, context, callback) => {
  callback(null, { statusCode: 200, body: JSON.stringify({ stars: 5 }) })
}
