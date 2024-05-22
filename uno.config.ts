// uno.config.ts
import {
  defineConfig,
  presetWind,
  presetIcons,
  transformerVariantGroup
} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { IconEnum } from './src/enum/IconEnum'

export default defineConfig({
  shortcuts: [],
  rules: [[/grid-area-(\w+)/, ([, d]) => ({ 'grid-area': d })]],
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
  },
  safelist: Object.values(IconEnum)
})
