const datoApiToken = process.env.DATO_API_TOKEN
const isPreview = (process.env.APP_PREVIEW === 'true')
console.log(`\n Preview Mode is ${isPreview ? 'ON' : 'OFF'} \n`)

module.exports = {
  publicRuntimeConfig: {
    datoApiToken: isPreview ? datoApiToken : undefined,
      isPreview,
  },
}
