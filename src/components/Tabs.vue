<template>
  <div class="flex">
    <div
      class="text-sm text-gray m-3 cursor-pointer"
      :class="{ active: index === activeIndex }"
      v-for="(tabItem, index) in tabList"
      @click="() => (activeIndex = index)"
      :key="tabItem"
    >
      {{ tabItem }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface TabsProps {
  tabList: string[]
}

defineProps<TabsProps>()

const activeIndex = defineModel<number>('activeIndex', { default: 0 })
</script>

<style scoped lang="scss">
.active {
  @apply text-orange  relative;
  &::after {
    @apply content-empty bg-orange absolute left-[calc(50%-1rem)] bottom--1 w-8 h-2px;
  }
}
</style>
