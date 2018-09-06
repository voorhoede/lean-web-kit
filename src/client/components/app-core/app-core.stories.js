import { storiesOf } from '@storybook/vue';
import { withReadme } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

import './index.css';
import './app-core.stories.css';

storiesOf('App core', module)
  .addDecorator(withReadme(readme))
  .addDecorator(withKnobs)
  .add('Colors', () => ({
    data() {
      return {
        colors: [
          { varName: 'action-color', color: '#6a9ce4' },
          { varName: 'neutral-color', color: '#f5f5f5' },
          { varName: 'dark-neutral-color', color: '#4c4c4c' },
          { varName: 'background-color', color: '#fff' },
          { varName: 'text-color', color: '#000' }
        ]
      };
    },
    template: `<div>
        <demo title="Colors" inset>
          <div class="colors">
            <div v-for="color in this.colors" class="color">
              <div class="color-box" :style="'background:' + color.color + ';'"></div>
              <p class="variable-name">--{{color.varName}}</p>
            </div>
          </div>
        </demo>
      </div>`
  }))
  .add('Text', () => {
    const headingText = text('Heading text', 'She stared through the window at the stars.')

    return {
    template: `
      <div>
        <demo title="Fonts" inset>
          <p style="font-weight:lighter;">Font weight: lighter</p>
          <p style="font-weight:normal;">Font weight: normal</p>
          <p style="font-weight:bold;">Font weight: bold</p>
        </demo>
        <demo title="Typography" inset knobs>
          <div class="headings">
            <h2 class="subtitle">Headings</h2>
            <h1>H1 ${headingText}</h1>
            <h2>H2 ${headingText}</h2>
            <h3>H3 ${headingText}</h3>
            <h4>H4 ${headingText}</h4>
            <h5>H5 ${headingText}</h5>
            <h6>H6 ${headingText}</h6>
          </div>
          <div class="paragraphs">
            <h2 class="subtitle">Paragraphs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Eu tincidunt tortor aliquam nulla.</p>
            <p>She stared through the window at the <a href="#stars">stars</a>.</p>
          </div>
        </demo>
      </div>`
    }
  })
  .add('Lists', () => ({
    template: `
      <div>
        <demo title="Unordered list" inset>
          <ul>
            <li>Item</li>
            <li>
              Item
              <ul>
                <li>Item</li>
                <li>Item</li>
              </ul>
            </li>
            <li>Item</li>
          </ul>
        </demo>
        <demo title="Ordered list" inset>
          <ol>
            <li>Item</li>
            <li>
              Item
              <ol>
                <li>Item</li>
                <li>Item</li>
              </ol>
            </li>
            <li>Item</li>
          </ol>
        </demo>
        <demo title="Definition list" inset>
          <dl>
            <dt>Term A</dt><dd>Description A</dd>
            <dt>Term B</dt><dd>Description B</dd>
          </dl>
        </demo>
        <demo title="Flat list" inset>
          <ul class="flat-list">
            <li><a href="/">Link 1</a></li>
            <li><a href="/">Link 2</a></li>
            <li><a href="/">Link 3</a></li>
          </ul>
        </demo>
        <demo title="Inline list" inset>
          <ul class="inline-list">
            <li><a href="/">Link 1</a></li>
            <li><a href="/">Link 2</a></li>
            <li><a href="/">Link 3</a></li>
          </ul>
        </demo>
      </div>
    `
  }))
  .add('Buttons', () => ({
    template: `
      <div class="buttons-demo">
        <demo title="Default" inset>
          <button class="button">Default</button>
        </demo>
        <demo title="Primary" inset>
          <button class="button button--primary">Primary</button>
          <button class="button button--primary button--pending">Pending</button>
        </demo>
        <demo title="Try it out!" inset knobs>
          <div>
            <button class="button ${
              boolean('isPrimary', false) ? 'button--primary ' : ''
            }
            ${boolean('isPending', false) ? 'button--primary button--pending ' : ''}">
              ${text('Button text', 'Edit me')}
            </button>
          </div>
        </demo>
      </div>
    `
  }))
  .add('Links', () => ({
    template: `
      <div class="links-demo">
        <demo title="Links" inset>
          <p><a href="#bla">Default</a></p>
          <p><a href="https://voorhoede.nl/" target="_blank" rel="noopener" data-outbound>Outbound</a></p>
        </demo>
      </div>
    `
  }))
  .add('App icons', () => ({
    data() {
      return {
        iconSizes: [ 64, 120, 144, 152, 192, 384, 512 ]
      }
    },
    template: `
      <div class="icons-demo">
        <demo title="App icons" inset>
          <ul>
            <li v-for="iconSize in this.iconSizes">
              <figure>
                <figcaption>
                  <p>{{iconSize}}x{{iconSize}}</p>
                  <p>image/png</p>
                </figcaption>
                <img 
                  :style="'height:' + Math.min(192, iconSize) + 'px;width:' + Math.min(192, iconSize) + 'px;'" 
                  src="/images/logo.svg" :alt="'Icon ' + iconSize + 'x' + iconSize"
                >
              </figure>
            </li>
          </ul>
        </demo>
      </div>
    `
  }));
