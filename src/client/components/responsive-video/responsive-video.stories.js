import { storiesOf } from '@storybook/vue'
import { withReadme } from 'storybook-readme'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import readme from './readme.md'
import ResponsiveVideo from './'
import VueI18n from 'vue-i18n'

import './responsive-video.stories.css'

storiesOf('Responsive video', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Vimeo default', () => ({
    components: { ResponsiveVideo },
    template: `
    <demo title="Vimeo default" style="margin-bottom:3rem;" inset knobs>
      <responsive-video :video="item.video" :autoplay="item.autoplay" :loop="item.loop" :mute="item.autoplay" />
    </demo>
    `,
    data() {
      return {
        item: {
          "autoplay": boolean('Autoplay', false),
          "mute": boolean('Mute', false),
          "loop": boolean('Loop', false),
          "video": {
            "url": "https://vimeo.com/265601385",
            "title": text('Video title', '10 second holiday video'),
            "width": 640,
            "height": 360,
            "provider": "vimeo",
            "providerUid": "265601385",
            "thumbnailUrl": "https://i.vimeocdn.com/video/695812178_640.jpg",
          }
        }
      }
    },
    i18n: new VueI18n({
      locale: 'en',
    })
  }))
  .add('Vimeo with autoplay', () => ({
    components: { ResponsiveVideo },
    template: `
    <demo title="Vimeo with autoplay" style="margin-bottom:3rem;" inset knobs>
      <responsive-video :video="item.video" :autoplay="item.autoplay" :loop="item.loop" :mute="item.autoplay" />
    </demo>
    `,
    data() {
      return {
        item: {
          "autoplay": boolean('Autoplay', true),
          "mute": boolean('Mute', true),
          "loop": boolean('Loop', false),
          "video": {
            "url": "https://vimeo.com/265601385",
            "title": text('Video title', '10 second holiday video'),
            "width": 640,
            "height": 360,
            "provider": "vimeo",
            "providerUid": "265601385",
            "thumbnailUrl": "https://i.vimeocdn.com/video/695812178_640.jpg",
          }
        }
      }
    }
  }))
  .add('Vimeo with loop and autoplay', () => ({
    components: { ResponsiveVideo },
    template: `
    <demo title="Vimeo with loop and autoplay" style="margin-bottom:3rem;" inset knobs>
      <responsive-video :video="item.video" :autoplay="item.autoplay" :loop="item.loop" :mute="item.autoplay" />
    </demo>
    `,
    data() {
      return {
        item: {
          "autoplay": boolean('Autoplay', true),
          "mute": boolean('Mute', true),
          "loop": boolean('Loop', true),
          "video": {
            "url": "https://vimeo.com/265601385",
            "title": text('Video title', '10 second holiday video'),
            "width": 640,
            "height": 360,
            "provider": "vimeo",
            "providerUid": "55491848",
            "thumbnailUrl": "https://i.vimeocdn.com/video/384455198_640.jpg",
          }
        }
      }
    }
  }))
  .add('YouTube default', () => ({
    components: { ResponsiveVideo },
    template: `
    <demo title="YouTube default" style="margin-bottom:3rem;" inset knobs>
      <responsive-video :video="item.video" :autoplay="item.autoplay" :loop="item.loop" :mute="item.autoplay" />
    </demo>
    `,
    data() {
      return {
        item: {
          "autoplay": boolean('Autoplay', false),
          "mute": boolean('Mute', false),
          "loop": boolean('Loop', false),
          "video": {
            "url": "https://www.youtube.com/watch?v=ZPIIT6siIaE&list=PL8HcoiB7g3NlaU-UU1boptT4tkz3KOXT2",
            "title": text('Video title', 'Een surfer neemt het op tegen de plastic vervuiling'),
            "width": 480,
            "height": 270,
            "provider": "youtube",
            "providerUid": "ZPIIT6siIaE",
            "thumbnailUrl": "https://i.ytimg.com/vi/ZPIIT6siIaE/hqdefault.jpg",
          }
        }
      }
    },
    i18n: new VueI18n({
      locale: 'en',
    })
  }))
  .add('YouTube with autoplay', () => ({
    components: { ResponsiveVideo },
    template: `
    <demo title="YouTube with autoplay" style="margin-bottom:3rem;" inset knobs>
      <responsive-video :video="item.video" :autoplay="item.autoplay" :loop="item.loop" :mute="item.autoplay" />
    </demo>
    `,
    data() {
      return {
        item: {
          "autoplay": boolean('Autoplay', true),
          "mute": boolean('Mute', true),
          "loop": boolean('Loop', false),
          "video": {
            "url": "https://www.youtube.com/watch?v=ZPIIT6siIaE&list=PL8HcoiB7g3NlaU-UU1boptT4tkz3KOXT2",
            "title": text('Video title', 'Een surfer neemt het op tegen de plastic vervuiling'),
            "width": 480,
            "height": 270,
            "provider": "youtube",
            "providerUid": "ZPIIT6siIaE",
            "thumbnailUrl": "https://i.ytimg.com/vi/ZPIIT6siIaE/hqdefault.jpg",
          }
        }
      }
    }
  }))
  .add('Youtube with loop and autoplay', () => ({
    components: { ResponsiveVideo },
    template: `
    <demo title="Youtube with loop and autoplay" style="margin-bottom:3rem;" inset knobs>
      <responsive-video :video="item.video" :autoplay="item.autoplay" :loop="item.loop" :mute="item.autoplay" />
    </demo>
    `,
    data() {
      return {
        item: {
          "autoplay": boolean('Autoplay', true),
          "mute": boolean('Mute', true),
          "loop": boolean('Loop', true),
          "video": {
            "url": "https://www.youtube.com/watch?v=B7bqAsxee4I",
            "title": text('Video title', 'Short funny video'),
            "width": 480,
            "height": 270,
            "provider": "youtube",
            "providerUid": "B7bqAsxee4I",
            "thumbnailUrl": "https://i.ytimg.com/vi/B7bqAsxee4I/hqdefault.jpg",
          }
        }
      }
    }
  }))
  .add('Portrait video', () => ({
    components: { ResponsiveVideo },
    template: `
    <demo title="Portrait video" style="margin-bottom:3rem;" inset knobs>
      <div class="portrait-video-demo">
        <responsive-video :video="item.video" :autoplay="item.autoplay" :loop="item.loop" :mute="item.autoplay" />
      </div>
    </demo>
    `,
    data() {
      return {
        item: {
          "autoplay": true,
          "mute": boolean('Mute', true),
          "loop": boolean('Loop', true),
          "video": {
            "url": "https://vimeo.com/285246241",
            "title": text('Video title', 'Native Share'),
            "width": 680,
            "height": 1366,
            "provider": "vimeo",
            "providerUid": "285246241",
            "thumbnailUrl": "https://i.vimeocdn.com/video/719878721_640.jpg",
          }
        }
      }
    }
  }))
