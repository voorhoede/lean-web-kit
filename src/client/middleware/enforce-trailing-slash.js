export default function ({ route, redirect }) {
  if (!route.fullPath.endsWith('/')) {
    redirect(301, `${route.fullPath}/`)
  }
}
