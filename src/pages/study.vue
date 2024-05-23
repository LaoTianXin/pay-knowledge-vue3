<script setup lang="ts">
import { swiperList } from '@/constant'
</script>

<template>
  <div>
    <div class="relative">
      <!-- 轮播图区域 -->
      <Swiper height="h-80" :swiper-list="swiperList"></Swiper>
      <!-- 会员登录区域 -->
      <div
        class="absolute bottom-0 left-0 w-full py-2 opacity-70 bg-gray-700 z-9"
      >
        <Container>
          <div class="w-full flex items-center justify-between">
            <div class="flex type">
              <div class="item active">每日一课</div>
              <div class="item">精品微课</div>
              <div class="item">学习计划</div>
              <div class="item">优质专栏</div>
            </div>

            <div class="flex items-center">
              <div
                class="rounded-full pl-4 pr-2 overflow-hidden bg-white flex items-center"
              >
                <input
                  placeholder="搜索"
                  class="outline-none pr-2 w-40 placeholder:text-sm"
                  type="text"
                />
                <i class="i-oui:search text-sm"></i>
              </div>

              <div
                class="flex items-center ml-5 text-white text-sm cursor-pointer"
              >
                <div class="flex items-center">
                  <i class="i-oui:heart w-1em h-1em mr-1"></i>
                  <div>会员中心</div>
                </div>

                <div
                  class="flex items-center ml-5 text-white text-sm cursor-pointer"
                >
                  <i class="i-oui:heart w-1em h-1em mr-1"></i>
                  <div>注册登录</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.type {
  .item {
    @apply text-white text-sm mr-4 px-2 py-1 flex items-center justify-center cursor-pointer;
    &.active,
    &:hover {
      @apply rounded-full bg-white text-black;
    }
  }
}
</style>
