import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import readme from './readme.md';
import FixedRatio from './';
import './fixed-ratio.stories.css';
storiesOf('Fixed ratio', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { FixedRatio },
    data() {
      return {
        images: [
          {
            width: 16,
            height: 9,
            text: '16 x 9'
          },
          {
            width: 4,
            height: 3,
            text: '4 x 3'
          },
          {
            width: 1,
            height: 1,
            text: '1 x 1'
          }
        ]
      };
    },
    template: `
      <div class="fixed-ratio-demo">
        <demo title="Fixed ratio" inset>
          <div v-for="image in this.images">
            <fixed-ratio :width="image.width" :height="image.height">{{image.text}}</fixed-ratio>
          </div>
        </demo>
      </div>
    `
  }));
