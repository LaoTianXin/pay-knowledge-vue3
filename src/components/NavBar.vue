<template>
  <div class="flex lt-sm:(flex-col absolute top-18 right-0 w-full)">
    <router-link class="navbar--item" to="/">产品</router-link>
    <a class="navbar--item" href="https://www.imooc.com">社区</a>
    <router-link class="navbar--item" to="/study">学习</router-link>
    <router-link class="navbar--item" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navbar--item {
  @apply relative px-10 text-white cursor-pointer fw-300 text-xl lt-sm:self-start lt-sm:(mt-2 text-black);
  &:hover {
    @apply fw-500 transition-all;
    &::after {
      @apply content-empty bg-white absolute left-[calc(50%-1rem)] bottom--1 w-8 h-2px;
    }
  }
}
</style>
