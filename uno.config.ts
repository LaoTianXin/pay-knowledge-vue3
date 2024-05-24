// uno.config.ts
import {
  defineConfig,
  presetWind,
  presetIcons,
  transformerVariantGroup
} from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import transformerDirectives from '@unocss/transformer-directives'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
import { IconEnum } from './src/enum/IconEnum'

export default defineConfig({
  shortcuts: [
    {
      btn: 'mr-3 px-4 py-2 bg-sky text-white flex justify-center items-center border-1 border-white cursor-pointer hover:bg-sky/90',
      'btn-plain':
        'mr-3 px-8 py-2 bg-white text-sky flex justify-center items-center border-1 border-sky cursor-pointer hover:bg-sky/10',
      'lesson-title': 'text-4xl font-bold line-height-20'
    }
  ],
  rules: [[/grid-area-(\w+)/, ([, d]) => ({ 'grid-area': d })]],
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributifyJsx()
  ],
  theme: {
    colors: {
      main: '#098'
    }
  },
  safelist: Object.values(IconEnum)
})
