export default function ({ app, env, route }) {
  const link = app.head.link.find(item => item.rel === 'canonical')
  const url = `${env.baseUrl}${route.path}`
  if (link) {
    link.href = url
  } else {
    app.head.link.push({ rel: 'canonical', href: url })
  }
}
