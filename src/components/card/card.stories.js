
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WCard from './card.vue'
import WCardImage from './card-image.vue'
import WCardContent from './card-content.vue'

const stories = storiesOf('Card', module)

stories.addDecorator(withKnobs)

stories.add('default', () => ({
  components: { WCard, WCardImage, WCardContent },
  template: `
    <w-container :max-width="500">
      <w-elevation elevation="1dp" raised="1dp">
        <w-card>
          <w-card-image src="https://placehold.it/350x150" />
          <w-card-content>
            <w-typography variant="headline5" gutter>
              Headline5
            </w-typography>
            <w-typography variant="body2">
              I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
            </w-typography>
          </w-card-content>
        </w-card>
      </w-elevation>
    </w-container>
  `
}), {
  info: {}
})
