<template>
  <div class="flex flex-1 h-30 items-center justify-between bg-dark-100">
    <router-link class="navbar--item" to="/">产品</router-link>
    <a class="navbar--item" href="https://www.imooc.com">社区</a>
    <router-link class="navbar--item" to="/study">学习</router-link>
    <router-link class="navbar--item" to="/about">关于</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navbar--item {
  @apply relative px-10 text-white cursor-pointer fw-300 text-xl;
  &:hover {
    @apply fw-500 transition-all;
    &::after {
      @apply content-empty bg-white absolute left-[calc(50%-1rem)] bottom--1 w-8 h-2px;
    }
  }
}
</style>
