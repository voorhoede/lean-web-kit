import axios from 'axios'

export default function getDatoData({ query, variables }) {
  return axios({
    url: 'https://graphql.datocms.com',
    method: 'post',
    data: { query, variables },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.DATO_API_TOKEN}`,
    }
  })
    .then(response => {
      if (response.status >= 200 && response.status < 300 && response.data && !response.data.errors) {
        return response.data.data
      }

      if (response.data && response.data.errors) {
        return Promise.reject(response.data.errors)
      }

      return Promise.reject(response.data)
    })
}
