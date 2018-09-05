import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import readme from './readme.md';
import ButtonGroup from './';

storiesOf('Button group', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: {
      ButtonGroup
    },
    data: () => ({
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
      extremeExample: [
        {
          type: 'page',
          title: 'Button 1',
          slug: 'button-1',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 2',
          slug: 'button-2',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 3',
          slug: 'button-3',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 4',
          slug: 'button-4',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 5',
          slug: 'button-5',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 6',
          slug: 'button-6',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 7',
          slug: 'button-7',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 8',
          slug: 'button-8',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 9',
          slug: 'button-9',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 10',
          slug: 'button-10',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 11',
          slug: 'button-11',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 12',
          slug: 'button-12',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 13',
          slug: 'button-13',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 14',
          slug: 'button-14',
          theme: 'button'
        },
        {
          type: 'page',
          title: 'Button 15',
          slug: 'button-15',
          theme: 'button'
        }
      ]
    }),
    template: `
      <div>
        <demo title="Single button" inset>
          <button-group :items="singleItem" />
        </demo>
        <demo title="Multiple buttons" inset>
          <button-group :items="multipleItems" />
        </demo>
        <demo title="Extreme example" inset>
          <button-group :items="extremeExample" />
        </demo>
      </div>
      `
  }));
