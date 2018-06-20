export default function ({ locale, slug }) {
  const url = `/data/${locale}/pages/${slug}.json`
  if (process.client) {
    // On client load over http
    return fetch(url).then(res => res.json())
  } else {
    // On server load from file system
    return import(`~/static${url}`)
  }
}
