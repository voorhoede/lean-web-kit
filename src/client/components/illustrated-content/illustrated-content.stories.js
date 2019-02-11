import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import readme from './readme.md';
import IllustratedContent from './';

storiesOf('Illustrated Content', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { IllustratedContent },
    data() {
      return {
        singleItem: {
          "title": "Optimised for search (SEO)",
          "text": "<p>A simple paragraph</p>",
          "id": "39140",
          "image": {
            "format": "jpeg",
            "width": 1280,
            "height": 720,
            "alt": "Two hands forming a heart around the sun during a sunset",
            "url": "https://www.datocms-assets.com/6068/1529572359-random-image.jpeg"
          },
          "callToAction": {
            title: "quid sentiam",
            type: "url",
            url: "https://leanwebkit.voorhoede.nl/en/features/"
          }
        }
      }
    },
    template: `
      <div>
        <demo title="Single feature" inset>
          <illustrated-content
            :title="singleItem.title"
            :text="singleItem.text"
            :image="singleItem.image"
            :call-to-action="singleItem.callToAction" />
        </demo>
      </div>
      `
  }))
