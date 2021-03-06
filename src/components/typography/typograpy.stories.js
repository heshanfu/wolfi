import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import WTypography from './typography.vue'

const stories = storiesOf('Typography', module)

stories.addDecorator(withKnobs)

stories
  .add('default', () => ({
    components: { WTypography },
    template: `
      <div>
        <w-typography variant="headline1">Test</w-typography>
        <w-typography variant="headline2">Test</w-typography>
        <w-typography variant="headline3">Test</w-typography>
        <w-typography variant="headline4">Test</w-typography>
        <w-typography variant="headline5">Test</w-typography>
        <w-typography variant="headline6">Test</w-typography>
        <w-typography variant="subtitle1">Test</w-typography>
        <w-typography variant="subtitle2">Test</w-typography>
        <w-typography variant="body1">Test</w-typography>
        <w-typography variant="body2">Test</w-typography>
        <w-typography variant="button">Test</w-typography>
        <w-typography variant="caption">Test</w-typography>
        <w-typography variant="overline">Test</w-typography>
      </div>
    `
  }), {
    info: {}
  })
