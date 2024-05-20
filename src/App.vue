<script setup lang="ts">
import { RouterView } from 'vue-router'
import { registerSW } from 'virtual:pwa-register'
import { useThemeStore } from './store/useThemeStore'

const themeStore = useThemeStore()
const time = 30 * 60 * 60 * 1000

useResizeObserver(document.body, () => {
  const width = window.innerWidth
  const contentWidth = 1200

  themeStore.$patch({
    rate: width < 1200 ? +(width / contentWidth).toFixed(2) : 1
  })
})
onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      registration &&
        setInterval(() => {
          registration.update()
        }, time)
    }
  })
})
</script>

<template>
  <RouterView />
  <ReloadPrompt></ReloadPrompt>
</template>

<style scoped></style>
