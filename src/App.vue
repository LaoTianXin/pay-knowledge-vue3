<script setup lang="ts">
import { RouterView } from 'vue-router'
import { registerSW } from 'virtual:pwa-register'

const time = 30 * 60 * 60 * 1000
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
