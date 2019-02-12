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
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          }
        ],
        multipleItems: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39141,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39142,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
        ],
        extremeExample: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39141,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39142,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39143,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39144,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39145,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39146,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39147,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39148,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
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
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.'
          }
        ],
        multipleItems: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.'
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39141,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.'
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39142,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.'
          },
        ],
        multipleActionItems: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.',
            callToAction: {
              title: "quid sentiam",
              type: "url",
              url: "https://leanwebkit.voorhoede.nl/en/features/"
            }
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39141,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.',
            callToAction: {
              title: "medicinam luxuriae",
              type: "url",
              url: "https://leanwebkit.voorhoede.nl/en/guides/"
            }
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39142,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.',
            callToAction: {
              title: "inquit quaeris",
              type: "url",
              url: "https://leanwebkit.voorhoede.nl/en/always-secure/"
            }
          },
        ],
        extremeExample: [
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39140,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. '
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39141,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.'
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39142,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.'
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39143,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.'
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39144,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.'
          },
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39145,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Si dolor summum malum est, dici aliter non potest.'
          },
          {
            itemType: 'feature',
            title: 'Plug-and-Play pages',
            id: 39146,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Apparet statim, quae sint officia, quae actiones.'
          },
          {
            itemType: 'feature',
            title: 'Optimised for search (SEO)',
            id: 39147,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.'
          },
          {
            itemType: 'feature',
            title: 'Know your users',
            id: 39148,
            image: {
              "format": "svg",
              "url": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none'/><path d='M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'/></svg>"
            },
            text: 'Egone quaeris, inquit, quid sentiam? Nunc haec primum fortasse audientis servire debemus.'
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

        <demo title="Multiple features with body and call to action" inset>
          <feature-list :features="multipleActionItems" />
        </demo>

        <demo title="Extreme example with body" inset>
          <feature-list :features="extremeExample" />
        </demo>
      </div>
      `
  }))
