import { storiesOf } from '@storybook/vue'

import './index.css'

storiesOf('App core', module)
  .add('Colors', () => ({
    template: '<div>@todo: colors</div>',
  }))
  .add('Lists', () => ({
    template: `
      <div>
        <demo title="Default list">
          <ul>
            <li><a href="/">Link 1</a></li>
            <li><a href="/">Link 2</a></li>
            <li><a href="/">Link 3</a></li>
          </ul>
        </demo>
        <demo title="Flat list">
          <ul class="flat-list">
            <li><a href="/">Link 1</a></li>
            <li><a href="/">Link 2</a></li>
            <li><a href="/">Link 3</a></li>
          </ul>
        </demo>
        <demo title="Inline list">
          <ul class="inline-list">
            <li><a href="/">Link 1</a></li>
            <li><a href="/">Link 2</a></li>
            <li><a href="/">Link 3</a></li>
          </ul>
        </demo>
      </div>
    `,
  }))
