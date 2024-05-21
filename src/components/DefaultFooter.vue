<template>
  <div class="bg-coolgray-700 text-coolgray-400 text-lg py-4">
    <Container class="px-20 flex-col">
      <div
        class="flex justify-between self-start border-b-1 w-full border-coolgray-500 px-4 pb-4 mb-4 flex-1"
      >
        <ul class="flex justify-start items-center">
          <li v-for="nav in navList" :key="nav.name" class="footer--item">
            <a v-if="isURL(nav.path)" target="_blank" :href="nav.path">{{
              nav.name
            }}</a>
            <router-link v-else :to="nav.path">{{ nav.name }}</router-link>
          </li>
        </ul>

        <div class="flex items-center">
          <div
            v-for="(item, index) in iconList"
            :key="item.iconClass"
            :class="['group', 'relative', 'z-1', { 'ml-4': index > 0 }]"
          >
            <div class="cursor-pointer text-3xl" :class="item.iconClass"></div>
            <img
              class="max-w-none w-30 h-30 hidden group-hover:block absolute top-0 left-50% translate-x-[-50%] translate-y-[-105%]"
              :src="item.img"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="flex self-start mb-5">
        <ol v-for="item in infoList" :key="item.title" class="text-sm mr-10">
          <dt class="flex items-center font-700 text-white mb-5 text-xl">
            <span :class="['mr-2', item.iconClass]"></span>
            <span>{{ item.title }}</span>
          </dt>
          <dd v-for="detail in item.infoDetailList" :key="detail.text">
            <a target="_blank" v-if="detail.path" :href="detail.path">{{
              detail.text
            }}</a>
            <span v-else> {{ detail.text }}</span>
          </dd>
        </ol>
      </div>

      <div class="flex w-full justify-center items-center text-sm">
        <div>
          Copyright © {{ record.name }} {{ record.startYear }}-{{
            record.endYear
          }}
        </div>
        <a
          class="flex items-center"
          href="https://beian.mps.gov.cn/#/query/webSearch"
        >
          <i
            class="block bg-contain bg-no-repeat w-4 h-4 mx-2"
            :style="{ backgroundImage: `url(${beianicon})` }"
          ></i>
          {{ record.icp }}
        </a>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import beianicon from '../assets/icons/beianicon.png'
import { isURL } from '@/utils/url'
interface DefaultFooterProps {
  iconList: Footer.IIcon[]
  infoList: Footer.IInfo[]
  record: Footer.IRecord
  navList: Nav.INav[]
}
withDefaults(defineProps<DefaultFooterProps>(), {
  iconList: () => [],
  infoList: () => [],
  record: () => ({}) as Footer.IRecord,
  navList: () => []
})
</script>

<style lang="scss" scoped>
.footer--item {
  @apply mx-4 cursor-pointer;
}
</style>
