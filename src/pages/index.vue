<script setup lang="ts">
import bg from '@/assets/images/bg.png'
import { useThemeStore } from '@/store/useThemeStore'

const store = useThemeStore()
const swiperList: Swiper.ISwiper[] = [
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
  <Swiper :height="36 * store.rate + 'rem'" :swiper-list="swiperList"> </Swiper>
  <Card
    title="title"
    sub-title="subTitle"
    border
    :image="bg"
    :image-type="'default'"
  ></Card>
</template>

<style lang="scss">
.test {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
