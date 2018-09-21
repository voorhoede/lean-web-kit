import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import readme from './readme.md';
import CardGroup from './';

storiesOf('Card group', module)
  .addDecorator(withReadme(readme))
  .add('Card: title, description, call to action', () => ({
    components: { CardGroup },
    data() {
      return {
        singleItem: [
          {
            "id": "394125",
            "title": "Unum nescio, quo modo possit",
            "body": "At iste non dolendi status non vocatur voluptas. Beatus autem esse in maximarum rerum timore nemo potest.",
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Hoc enim",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
        ],
        multipleItems: [
          {
            "id": "394125",
            "title": "Unum nescio, quo modo possit",
            "body": "At iste non dolendi status non vocatur voluptas. Beatus autem esse in maximarum rerum timore nemo potest.",
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Hoc enim",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
          {
            "id": "394126",
            "title": "Natura profectae subito a sapientia relictae sint",
            "body": "Suo genere perveniant ad extremum; Nec vero sum nescius esse utilitatem in historia, non modo voluptatem.",
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Suo genere",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
          {
            "id": "394127",
            "title": "Nec vero sum nescius esse",
            "body": "Dic in quovis conventu te omnia facere, ne doleas. Bona autem corporis huic sunt, quod posterius posui, similiora.",
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Ingeniosi vocantur",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
          {
            "id": "394128",
            "title": "Nam Metrodorum non puto ipsum professum",
            "body": "Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. Duo Reges: constructio interrete. Expectoque quid ad id, quod quaerebam, respondeas. ",
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Modo etiam",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
          {
            "id": "394129",
            "title": "Neque enim disputari sine reprehensione",
            "body": "Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc.",
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Quod si ita",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
        ],
      }
    },
    template: `
      <div>
        <demo title="Single card" inset>
          <card-group :cards="singleItem" />
        </demo>

        <demo title="Multiple cards" inset>
          <card-group :cards="multipleItems" />
        </demo>
      </div>
      `
  }))
  .add('Card: title, call to action', () => ({
    components: { CardGroup },
    data() {
      return {
        singleItem: [
          {
            "id": "394125",
            "title": "Unum nescio, quo modo possit",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Hoc enim",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
        ],
        multipleItems: [
          {
            "id": "394125",
            "title": "Unum nescio, quo modo possit",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Hoc enim",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
          {
            "id": "394126",
            "title": "Natura profectae subito a sapientia relictae sint",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Suo genere",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
          {
            "id": "394127",
            "title": "Nec vero sum nescius esse",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Ingeniosi vocantur",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
          {
            "id": "394128",
            "title": "Nam Metrodorum non puto ipsum professum",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Modo etiam",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
          {
            "id": "394129",
            "title": "Neque enim disputari sine reprehensione",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Quod si ita",
              "slug": "add-your-footer",
            },
            callToAction: true,
          },
        ],
      }
    },
    template: `
      <div>
        <demo title="Single card" inset>
          <card-group :cards="singleItem" />
        </demo>

        <demo title="Multiple cards" inset>
          <card-group :cards="multipleItems" />
        </demo>
      </div>
      `
  }))
  .add('Card: title', () => ({
    components: { CardGroup },
    data() {
      return {
        singleItem: [
          {
            "id": "394125",
            "title": "Unum nescio, quo modo possit",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Hoc enim",
              "slug": "add-your-footer",
            }
          },
        ],
        multipleItems: [
          {
            "id": "394125",
            "title": "Unum nescio, quo modo possit",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Hoc enim",
              "slug": "add-your-footer",
            },
            callToAction: false,
          },
          {
            "id": "394126",
            "title": "Natura profectae subito a sapientia relictae sint",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Suo genere",
              "slug": "add-your-footer",
            },
            callToAction: false,
          },
          {
            "id": "394127",
            "title": "Nec vero sum nescius esse",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Ingeniosi vocantur",
              "slug": "add-your-footer",
            },
            callToAction: false,
          },
          {
            "id": "394128",
            "title": "Nam Metrodorum non puto ipsum professum",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Modo etiam",
              "slug": "add-your-footer",
            },
            callToAction: false,
          },
          {
            "id": "394129",
            "title": "Neque enim disputari sine reprehensione",
            "body": null,
            "image": {
              "url": "https://www.datocms-assets.com/6068/1536933511-hotjar.png"
            },
            "link": {
              "type": "page",
              "title": "Quod si ita",
              "slug": "add-your-footer",
            },
            callToAction: false,
          },
        ],
      }
    },
    template: `
      <div>
        <demo title="Single card" inset>
          <card-group :cards="singleItem" />
        </demo>

        <demo title="Single card" inset>
          <card-group :cards="multipleItems" />
        </demo>
      </div>
      `
  }))
