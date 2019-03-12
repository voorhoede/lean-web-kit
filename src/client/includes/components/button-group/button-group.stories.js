import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import { withKnobs, number } from '@storybook/addon-knobs';
import readme from './readme.md';
import ButtonGroup from './';

storiesOf('Button group', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: {
      ButtonGroup
    },
    data() {
      const extremeExample = [];
      for (let i = 0; i < number('Number of buttons', 15); i++) {
        extremeExample.push({
          type: 'page',
          title: `Button ${i + 1}`,
          slug: `button-${i + 1}`,
          theme: 'button'
        })
      }

      return {
        singleItem: [
          {
            type: 'page',
            title: 'Configure headers',
            slug: 'configure-response-headers',
            theme: 'button'
          }
        ],
        multipleItems: [
          {
            type: 'page',
            title: 'Configure headers',
            slug: 'configure-response-headers',
            theme: 'primary button'
          },
          {
            type: 'page',
            title: 'Edit your footer',
            slug: 'edit-your-footer',
            theme: 'button'
          }
        ],
        extremeExample: extremeExample
      }
    },
    template: `
      <div>
        <demo title="Single button" inset>
          <button-group :items="singleItem" />
        </demo>
        <demo title="Multiple buttons" inset>
          <button-group :items="multipleItems" />
        </demo>
        <demo title="Extreme example" inset knobs>
          <button-group :items="extremeExample" />
        </demo>
      </div>
      `
  }));
