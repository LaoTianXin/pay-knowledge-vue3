<template>
  <!-- 购物区域 -->
  <Container>
    <div class="w-full flex p-10">
      <div class="rounded w-1/2 mr-5"></div>
      <div class="flex-1 text-sm">
        <div class="text-2xl font-bold text-black mb-2">
          高级前端工程师（大前端）
        </div>
        <div class="text-gray-500 mb-8">教你轻松提升的能力</div>
        <div class="text-gray-500 mb-2">
          <span class="cursor-pointer">Tomic</span>
          <span class="px-2">|</span>
          <span class="cursor-pointer">前端大牛</span>
        </div>

        <div class="text-gray-500 mb-3">
          <span>2000人学习</span> <span class="px-2">|</span>
          <span>已更新：10/20</span>
        </div>

        <div class="h-10 bg-gray-500 mb-3"></div>
        <div class="text-2xl text-orange font-bold mb-12">￥3680.00</div>
        <div class="flex">
          <div class="btn">加入购物车</div>

          <div class="btn-plain">收藏</div>
        </div>
      </div>
    </div>
  </Container>
  <div class="bg-gray-400 p-4">
    <Container>
      <div class="flex gap-4 w-full">
        <!-- 详细信息页面.md -->
        <div class="w-3/4 bg-white rounded-lg p-2">
          <!-- tab切换界面 -->
          <Tabs v-model:activeIndex="activeIndex" :tabList="tabs"></Tabs>
          <MarkDown></MarkDown>
        </div>
        <!-- 课程推荐 -->
        <div class="w-1/4 bg-sky h-full rounded-lg">
          <div>课程推荐</div>
          <div>课程推荐</div>
          <div>课程推荐</div>
          <div>课程推荐</div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { useParams } from '@/hooks/useParams'
import MarkDown from '../../project/test.md'

const tabs = ['课程介绍', '章节目录', '学员评价']

const activeIndex = ref(0)

provide('activeIndex', activeIndex)
type ParamsType = {
  id: string
}
const params = useParams<ParamsType>()
</script>

<style lang="scss" scoped></style>
