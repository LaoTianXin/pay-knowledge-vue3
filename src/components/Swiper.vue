<template>
  <swiper
    :modules="modeles"
    :space-between="0"
    :slides-per-view="1"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
    :pagination="{ type: 'fraction', el: '.pagination' }"
    :class="getSwiperHeight(height).class"
    :style="getSwiperHeight(height).style"
    autoplay
    v-bind="attrs"
  >
    <swiper-slide v-for="swiper in swiperList" :key="swiper.img">
      <slot name="swiperItem" :swiper="swiper">
        <div
          class="h-full bg-cover bg-no-repeat bg-center-top"
          :style="{ backgroundImage: `url(${swiper.img})` }"
        >
          <Container>
            <div class="flex items-start justify-center flex-col ml-20">
              <div class="mb-8 text-4xl fw-600">{{ swiper.title }}</div>
              <div class="text-2xl fw-500">{{ swiper.subTitile }}</div>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>

    <div
      class="flex justify-center items-center absolute right-0 bottom-0 bg-white opacity-60 text-dark-300 w-40 h-12 z-30"
    >
      <div class="pagination w-unset! font-bold mr-4"></div>
      <div class="prev i-mdi-arrow-left-thin cursor-pointer" style="font-size: 2rem"></div>
      <div class="next i-mdi-arrow-right-thin cursor-pointer" style="font-size: 2rem"></div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

import 'swiper/css/pagination'

interface SwiperProps {
  swiperList: SwiperType.ISwiper[]
  height: string
}

withDefaults(defineProps<SwiperProps>(), {
  swiperList: () => [],
  height: 'h-80'
})

const attrs = useAttrs()

const modeles = [Navigation, Pagination, Autoplay]
const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

const getSwiperHeight = (height: string) => {
  // props.height
  // 如果height的值包含rem,em,px，则返回 {string: str, class: ''}
  // 如果height的值包含h-，则返回 {string: '', class: str}
  return {
    style: /(rem|em|px)/.test(height) ? { height } : {},
    class: /h-/.test(height) ? height : ''
  }
}
</script>

<style lang="scss" scoped>
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}
</style>
