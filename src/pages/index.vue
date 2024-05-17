<script setup lang="ts">
import bg from '@/assets/images/bg.png'
const swiperList: ISwiper[] = [
  {
    title: 'toimc',
    subTitile: 'subTitile',
    img: bg
  },
  {
    title: 'toimc',
    subTitile: 'subTitile',
    img: bg
  },
  {
    title: 'toimc',
    subTitile: 'subTitile',
    img: bg
  }
]
</script>

<template>
  <Swiper :swiper-list="swiperList"> </Swiper>
</template>
