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
        withoutAction: {
          "title": "Optimised for search (SEO)",
          "text": "<p>A simple paragraph</p>",
          "id": "39140",
          "image": {
            "format": "jpeg",
            "width": 1280,
            "height": 720,
            "alt": "Two hands forming a heart around the sun during a sunset",
            "url": "https://www.datocms-assets.com/6068/1529572359-random-image.jpeg"
          }
        },
        withoutActionInverseLayout: {
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
          "inverseLayout": true
        },
        withAction: {
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
        },
        withActionInverseLayout: {
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
          },
          "inverseLayout": true
        }
      }
    },
    template: `
      <div>
        <demo title="Without call to action" inset>
          <illustrated-content
            :title="withoutAction.title"
            :text="withoutAction.text"
            :image="withoutAction.image" />
        </demo>

        <demo title="Without call to action" inset>
          <illustrated-content
            :title="withoutActionInverseLayout.title"
            :text="withoutActionInverseLayout.text"
            :image="withoutActionInverseLayout.image"
            :inverse-layout="withoutActionInverseLayout.inverseLayout" />
        </demo>

        <demo title="With call to action" inset>
          <illustrated-content
            :title="withAction.title"
            :text="withAction.text"
            :image="withAction.image"
            :call-to-action="withAction.callToAction" />
        </demo>

        <demo title="With call to action" inset>
          <illustrated-content
            :title="withActionInverseLayout.title"
            :text="withActionInverseLayout.text"
            :image="withActionInverseLayout.image"
            :call-to-action="withActionInverseLayout.callToAction"
            :inverse-layout="withActionInverseLayout.inverseLayout" />
        </demo>
      </div>
      `
  }))
