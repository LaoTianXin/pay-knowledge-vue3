// uno.config.ts
import {
  defineConfig,
  presetWind,
  presetIcons,
  transformerVariantGroup
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
export default defineConfig({
  shortcuts: [],
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      main: '#098'
    }
  }
})
