<script setup lang="ts">
import { useThemeStore } from '@/store/useThemeStore'
import { swiperList } from '@/constant'
import { projects, lessons, partners } from '@/constant'

const store = useThemeStore()
</script>

<template>
  <Swiper :height="36 * store.rate + 'rem'" :swiper-list="swiperList"> </Swiper>
  <Container>
    <div class="py-4">
      <div class="text-2xl">“</div>
      <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-400 w-2/3">
          多年来，toimc技术不忘初心，以建立行业服务标杆为目标，不断提升技术设计服务水平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身价值！
        </div>
        <div class="flex pl-20 w-1/3 justify-end items-center">
          <div class="w-1/2 h-[1px] bg-gray-500"></div>
          <div class="text-2xl relative ml-2 top-1">”</div>
        </div>
      </div>
    </div>
  </Container>
  <Container>
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lt-sm:px-4"
    >
      <a
        :href="item.url"
        target="_blank"
        v-for="(item, index) in projects"
        :key="index"
        class="flex"
      >
        <Card
          class="w-full rounded-0 transition-all hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1) card"
          :icon="item.icon"
          :title="item.title"
          :sub-title="item.subTitle"
          border
        >
          <template #default>
            <div
              class="mx-4 flex items-center justify-between text-gray-500 mb-4 more"
            >
              查看更多
              <div class="i-mdi:arrow-right-thin text-3xl ml-2"></div>
            </div>
          </template>
        </Card>
      </a>
    </div>
  </Container>

  <Container class="mt-5">
    <div class="py-4">
      <div class="text-2xl font-bold pb-4">官方课程</div>
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-400">
          toimc官方出品，经典内容设计，匠心细致，专业讲解。
        </div>
      </div>
    </div>
  </Container>
  <Container>
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lt-sm:px-4"
    >
      <a
        :href="item.url"
        target="_blank"
        v-for="(item, index) in lessons"
        :key="index"
        class="flex"
      >
        <Card
          class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
          :image="item.image"
          image-type="rounded"
          :title="item.title"
          :sub-title="item.subTitle"
          border
        >
          <template #default>
            <div
              class="mx-4 flex items-center justify-between text-gray-500 mb-4"
            >
              查看更多
              <div class="i-mdi:arrow-right-thin text-3xl ml-2"></div>
            </div>
          </template>
        </Card>
      </a>
    </div>
  </Container>
  <Container class="mt-5">
    <div class="py-4">
      <div class="text-2xl font-bold pb-4">课程项目展示</div>
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-400">项目及架构展示，核心主流技术</div>
      </div>
    </div>
  </Container>
  <Container class="w-full text-gray-400">
    <Swiper
      :swiper-list="swiperList"
      :height="28 * store.rate + 'rem'"
      class="w-2/3"
    ></Swiper>
    <div
      class="w-1/3 bg-coolgray-700 self-stretch flex flex-col justify-center px-4"
    >
      <div class="text-2xl font-bold pb-4 text-gray-100">官方课程</div>
      <div class="text-sm">
        toimc官方出品，经典内容设计，匠心细致，专业讲解。
      </div>
      <div class="flex items-center justify-between mb-4">查看更多</div>
      <div class="i-mdi:arrow-right-thin text-4xl"></div>
    </div>
  </Container>
  <Container>
    <div class="text-2xl font-bold mt-8">合作伙伴</div>
  </Container>
  <Container>
    <FreeSwiper :items="partners"></FreeSwiper>
  </Container>
  <Container class="py-4">
    <div class="w-2/3 grid h-100 grid-flow-row grid-flow-col gap-3 m-15">
      <div
        class="w-full h-full bg-gray col-span-4 row-span-1 row-start-1 col-start-1"
      ></div>

      <div
        class="w-full h-full bg-pink col-span-2 row-span-2 col-start-1 row-start-2"
      ></div>
      <div
        class="w-full h-full bg-sky col-span-2 row-span-1 row-start-2 col-start-3"
      ></div>
      <div
        class="w-full h-full bg-emerald col-span-2 row-span-1 col-start-3 row-start-3"
      ></div>
    </div>
    <div class="w-1/3 self-stretch flex flex-col justify-center">
      <div class="text-2xl font-bold pb-4">讲师团队</div>
      <div class="text-sm text-gray-400">
        <p>一线大厂、资深技术大牛10名</p>
        <p>技术专家不定期坐镇直播间</p>
        <p>前端、Java、Python工程师对应不同用户开发需求</p>
        <p>年薪百万不是梦，加入我们!</p>
      </div>
    </div>
  </Container>
</template>

<style scoped lang="scss">
:deep(.card) {
  &:hover {
    p,
    .more {
      color: white;
    }
  }
}
</style>
