export default function ({ locale }) {
  const url = `/data/search-${locale}.json`

  if (process.client) {
    // On client load over http
    return fetch(url).then(res => res.json())
  } else {
    // On server load from file system
    const data = JSON.parse(require('fs').readFileSync(`src/client/static${url}`, 'utf8'))
    return Promise.resolve(data)
  }
}
