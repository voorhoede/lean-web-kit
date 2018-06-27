import { storiesOf } from '@storybook/vue'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withReadme } from 'storybook-readme'
import readme from './readme.md'
import RichText from './'

storiesOf('Rich text', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Default', () => ({
      components: { RichText },
      template: `
        <div>
          <demo title="Multi paragraph" inset>
            <rich-text :text="dynamicText" />
          </demo>
          <demo title="Text variations" inset>
            <div  class="text-variation" v-for="(item, index) in textVariations" :key="index" style="margin-bottom:1rem;">
              <h2 style="margin-bottom:.5rem;">{{ item.type }}</h2>
              <rich-text :text="item.shortText" />
            </div>
          </demo>
        </div>`,
      data() {
        return {
          dynamicText: text('Text', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Magna etiam tempor orci eu lobortis elementum. Libero enim sed faucibus turpis. Lobortis elementum nibh tellus molestie nunc non. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Magna etiam tempor orci eu lobortis elementum. Libero enim sed faucibus turpis. Lobortis elementum nibh tellus molestie nunc non. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.</p>'),
          textVariations: [
            {
              type: '<strong>',
              shortText: text('Text', '<p>Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Magna etiam tempor orci eu lobortis elementum.</p>')
            },
            {
              type: '<em>',
              shortText: text('Text', '<p>Lorem ipsum <em>dolor sit amet</em>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Magna etiam tempor orci eu lobortis elementum.</p>')
            },
            {
              type: '<small>',
              shortText: text('Text', '<p>Lorem ipsum <small>dolor sit amet</small>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Magna etiam tempor orci eu lobortis elementum.</p>')
            },
            {
              type: '<a>',
              shortText: text('Text', '<p>Lorem ipsum <a href="#">dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Magna etiam tempor orci eu lobortis elementum.</p>')
            },
            {
              type: '<blockquote>',
              shortText: text('Text', '<blockquote><p>Everything in this world is magic, except for the magician.</p></blockquote>')
            },
            {
              type: '<table>',
              shortText: text('Text', `<table style="border-collapse: collapse; width: 100%;" border="1">
                                        <tbody>
                                          <tr style="height: 17px;">
                                            <td style="width: 33.3333%; height: 17px;"><strong>Fruits</strong></td>
                                            <td style="width: 33.3333%; height: 17px;"><strong>Price</strong></td>
                                            <td style="width: 33.3333%; height: 17px;"><strong>Color</strong></td>
                                          </tr>
                                          <tr style="height: 17px;">
                                            <td style="width: 33.3333%; height: 17px;">Apple</td>
                                            <td style="width: 33.3333%; height: 17px;">1 euro</td>
                                            <td style="width: 33.3333%; height: 17px;">red, green</td>
                                          </tr>
                                          <tr style="height: 17px;">
                                            <td style="width: 33.3333%; height: 17px;">Orange</td>
                                            <td style="width: 33.3333%; height: 17px;">2 euros</td>
                                            <td style="width: 33.3333%; height: 17px;">orange</td>
                                          </tr>
                                          <tr style="height: 17px;">
                                            <td style="width: 33.3333%; height: 17px;">Framboos</td>
                                            <td style="width: 33.3333%; height: 17px;">50 euros</td>
                                            <td style="width: 33.3333%; height: 17px;">red</td>
                                          </tr>
                                        </tbody>
                                      </table>`)
            },
          ]
        }
      },
  }))
 