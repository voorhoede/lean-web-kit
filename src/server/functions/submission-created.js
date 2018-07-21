/**
 * Placeholder `submission-created` handler with `payload` available for use.
 * @see https://www.netlify.com/docs/form-handling/#functions-integration
 */
export const handler = (event, context, callback) => {
  const send = body => callback(null, { statusCode: 200, body: JSON.stringify(body) })
  const { payload } = JSON.parse(event.body)
  console.log('\nbody.payload\n')
	console.log(payload)
  send({ payload })
}
