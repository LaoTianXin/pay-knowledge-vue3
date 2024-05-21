<template>
  <div class="flex lt-sm:(flex-col absolute top-18 right-0 w-full)">
    <template v-for="nav in navs" :key="nav.name">
      <a
        v-if="isURL(nav.path)"
        target="_blank"
        class="navbar--item"
        :href="nav.path"
        >{{ nav.name }}</a
      >
      <router-link v-else :to="nav.path" class="navbar--item">{{
        nav.name
      }}</router-link>
    </template>
  </div>
</template>

<script setup lang="ts">
import { isURL } from '@/utils/url'
interface NavBarProps {
  navs: Nav.INav[]
}
withDefaults(defineProps<NavBarProps>(), {
  navs: () => []
})
</script>

<style lang="scss" scoped>
.navbar--item {
  @apply relative px-10 text-white cursor-pointer fw-300 text-xl lt-sm:self-start lt-sm:(mt-2);
  &:hover {
    @apply fw-500 transition-all;
    &::after {
      @apply content-empty bg-white absolute left-[calc(50%-1rem)] bottom--1 w-8 h-2px;
    }
  }
}
</style>
