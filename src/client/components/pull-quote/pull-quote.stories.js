import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import PullQuote from './'

storiesOf('Pull quote', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => ({
    data: () => ({
      quoteText: {
        quote: {
          "authorImage": null,
          "authorName": "",
          "body": "The key to immortality is first living a life worth remembering.",
        },
        "type": "quote"
      },
      quoteTextExtended: {
        quote: {
          "authorImage": null,
          "authorName": "",
          "body": "You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend.",
        },
        "type": "quote"
      },
      quoteTextAuthor: {
        quote: {
          "authorImage": null,
          "authorName": "Bruce Lee",
          "body": "The key to immortality is first living a life worth remembering.",
        },
        "type": "quote"
      },

      quoteTextAuthorExtended: {
        quote: {
          "authorImage": null,
          "authorName": "Bruce Lee",
          "body": "You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend.",
        },
        "type": "quote"
      },
      quoteTextAuthorAvatar: {
        quote: {
          "authorImage": {
            "format": "png",
            "width": 30,
            "height": 30,
            "url": "https://avatars.dicebear.com/v2/male/avatar1.svg"
          },
          "authorName": "Bruce Lee",
          "body": "The key to immortality is first living a life worth remembering.",
        },
        "type": "quote"
      },
      quoteTextAuthorAvatarExtended: {
        quote: {
          "authorImage": {
            "format": "png",
            "width": 30,
            "height": 30,
            "url": "https://avatars.dicebear.com/v2/male/avatar2.svg"
          },
          "authorName": "Bruce Lee",
          "body": "You must be shapeless, formless, like water. When you pour water in a cup, it becomes the cup. When you pour water in a bottle, it becomes the bottle. When you pour water in a teapot, it becomes the teapot. Water can drip and it can crash. Become like water my friend.",
        },
        "type": "quote"
      }
    }),
    components: { PullQuote, },
    template: `
      <div style="max-width: 600px;">
        <demo title="Quote with text" inset>
          <pull-quote :quote="quoteText.quote" style="margin-bottom: 2rem" />
          <pull-quote :quote="quoteTextExtended.quote" />
        </demo>

        <demo title="Quote with text and author" inset>
          <pull-quote :quote="quoteTextAuthor.quote" style="margin-bottom: 2rem" />
          <pull-quote :quote="quoteTextAuthorExtended.quote" />
        </demo>

        <demo title="Quote with text, author and avatar" inset>
          <pull-quote :quote="quoteTextAuthorAvatar.quote" style="margin-bottom: 2rem" />
          <pull-quote :quote="quoteTextAuthorAvatarExtended.quote" />
        </demo>
      </div>
    `
  }))
