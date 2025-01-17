import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueMacros from 'unplugin-vue-macros/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { viteMockServe } from 'vite-plugin-mock'
import Markdown from 'unplugin-vue-markdown/vite'
import prism from 'markdown-it-prism'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md']
    }),
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/]
        }),
        vueJsx: VueJsx() // if needed
      }
    }),
    Markdown({
      headEnabled: true,
      markdownItUses: [prism]
    }),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        // presets
        'vue',
        VueRouterAutoImports,
        // custom
        '@vueuse/core',
        'pinia'
      ]
    }),
    Components({
      dts: true,
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA({
      manifest: {
        name: 'Vite App',
        short_name: 'Vite App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate'
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
