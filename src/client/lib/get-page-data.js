
export default function ({ locale, slug }) {
  const url = `/data/${locale}/pages/${slug}.json`

  if (process.client) {
    // On client load over http
    return fetch(url).then(res => res.json())
  } else {
    // On server load from file system
    return new Promise((resolve, reject) => {
      require('fs').readFile(`src/client/static${url}`, 'utf8', (err, data) => {
        err ? reject(err) : resolve( JSON.parse(data) );
      });
    });
  }
}
