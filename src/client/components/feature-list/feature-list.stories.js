import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import readme from './readme.md';
import FeatureList from './';

storiesOf('Feature list', module)
  .addDecorator(withReadme(readme))
  .add('Default', () => ({
    components: { FeatureList },
    data() {
      return {
        singleItem: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
          }
        ],
        multipleItems: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39141,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195012-iconchat.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39142,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195454-iconplugplay.png"
            },
          },
        ],
        extremeExample: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39141,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195012-iconchat.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39142,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195454-iconplugplay.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39143,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195012-iconchat.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39144,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195454-iconplugplay.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39145,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39146,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195454-iconplugplay.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39147,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39148,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195012-iconchat.png"
            },
          },
        ],
      }
    },
    template: `
      <div>
        <demo title="Single feature" inset>
          <feature-list :features="singleItem" />
        </demo>

        <demo title="Multiple features" inset>
          <feature-list :features="multipleItems" />
        </demo>

        <demo title="Extreme example" inset>
          <feature-list :features="extremeExample" />
        </demo>
      </div>
      `
  }))
  .add('With body', () => ({
    components: { FeatureList },
    data() {
      return {
        singleItem: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
            body: '<p><span>Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.</span></p>'
          }
        ],
        multipleItems: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
            body: '<p><span>Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.</span></p>'
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39141,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195012-iconchat.png"
            },
            body: '<p><span>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.</span></p>'
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39142,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195454-iconplugplay.png"
            },
            body: '<p><span>Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.</span></p>'
          },
        ],
        extremeExample: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
            body: 'Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. '
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39141,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195012-iconchat.png"
            },
            body: '<p><span>Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.</span></p>'
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39142,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195454-iconplugplay.png"
            },
            body: '<p><span>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.</span></p>'
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39143,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195012-iconchat.png"
            },
            body: '<p><span>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.</span></p>'
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39144,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195454-iconplugplay.png"
            },
            body: '<p><span>Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.</span></p>'
          },
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39145,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
            body: '<p>Si dolor summum malum est, dici aliter non potest.</p>'
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39146,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195454-iconplugplay.png"
            },
            body: '<p>Apparet statim, quae sint officia, quae actiones.</p>'
          },
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39147,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537194731-iconsearch.png"
            },
            body: '<p><span>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.</span></p>'
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39148,
            "image": {
              "format": "svg",
              "url": "https://www.datocms-assets.com/6068/1537195012-iconchat.png"
            },
            body: '<p><span>Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.</span></p>'
          },
        ],
      }
    },
    template: `
      <div>
        <demo title="Single feature with body" inset>
          <feature-list :features="singleItem" />
        </demo>

        <demo title="Multiple features with body" inset>
          <feature-list :features="multipleItems" />
        </demo>

        <demo title="Extreme example with body" inset>
          <feature-list :features="extremeExample" />
        </demo>
      </div>
      `
  }))
