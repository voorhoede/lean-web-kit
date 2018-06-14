export default function (obj = {}, props = []) {
  return Object.keys(obj)
    .filter((key) => props.indexOf(key) >= 0)
    .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {})
}
