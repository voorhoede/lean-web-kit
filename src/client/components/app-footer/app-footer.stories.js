import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import AppFooter from './'

storiesOf('App footer', module)
  .addDecorator(withReadme(`${readme}${propsToHtml(propComponent().props)}`))
  .add('Default', () => ({
    components: { AppFooter },
    template: '<app-footer />'
  }))


function getDefault (prop) {
  if (prop.default === undefined) {
    return ''
  }
  if (typeof prop.default === 'function') {
    return JSON.stringify(prop.default())
  }
  return JSON.stringify(prop.default)
}

function getType (prop) {
  if (prop.type === undefined) {
    return '?'
  }
  if (Array.isArray(prop.type)) {
    return prop.type.map(type => getType({ type })).join(', ')
  }
  if (typeof prop.type === 'function') {
    const match = prop.type && prop.type.toString().match(/^\s*function (\w+)/)
    return match ? match[1] : ''
  }
  return prop.type
}

function propsToHtml (props) {
  const normalizedProps = normalizeProps(props)
  const rows = Object.entries(normalizedProps).map(([key, prop]) => {
    return `
      <tr>
        <td>${key}</td>
        <td>${getType(prop)}</td>
        <td>${getDefault(prop)}</td>
        <td>${prop.required ? 'yes' : 'no'}</td>
        <!--<td>${prop.validator ? 'yes' : 'no'}</td>-->
      </tr>
    `
  })
  return `
    <h2>Properties</h2>
    <table>
      <thead>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>required?</th>
        <!--<th>custom validation?</th>-->
      </thead>
      <tbody>
        ${rows.join('\n')}
      </tbody>
    </table>
  `
}

function normalizeProps (props) {
  return Object.entries(props)
    .reduce((out, [key, prop]) => {
      if (Array.isArray(prop)) {
        if (typeof prop[0] === 'function') {
          out[key] = { type: prop }
        } else {
          out[key] = { type: undefined }
        }
      } else if (typeof prop === 'function') {
        out[key] = { type: prop }
      } else {
        out[key] = prop
      }
      return out
    }, {})
}

function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

function propComponent () {
  return {
    props: {
      // Basic type check (`null` matches any type)
      propA: Number,
      // Multiple possible types
      propB: [String, Number],
      // Required string
      propC: {
        type: String,
        required: true
      },
      // Number with a default value
      propD: {
        type: Number,
        default: 100
      },
      // Object with a default value
      propE: {
        type: Object,
        // Object or array defaults must be returned from
        // a factory function
        default: function () {
          return { message: 'hello' }
        }
      },
      // Custom validator function
      propF: {
        validator: function (value) {
          // The value must match one of these strings
          return ['success', 'warning', 'danger'].indexOf(value) !== -1
        }
      },
      propG: Boolean,
      propH: Date,
      propJ: Person,
      propI: ['label', 'value'],
    }
  }
}
