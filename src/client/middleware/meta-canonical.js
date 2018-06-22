export default function (context) {
  const link = context.app.head.link.find(item => item.rel === 'canonical')
  const url = enforceTrailingSlash(`${context.env.baseUrl}${context.route.path}`)
  if (link) {
    link.href = url
  } else {
    context.app.head.link.push({ rel: 'canonical', href: url })
  }
}

function enforceTrailingSlash (url) {
  return (url.endsWith('/')) ? url : `${url}/`
}
