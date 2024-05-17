<script setup lang="ts">
import bg from '@/assets/images/bg.png'
const swiperList: SwiperType.ISwiper[] = [
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
  <Card title="title" sub-title="subTitle" border :image="bg" :image-type="'default'"></Card>
</template>
