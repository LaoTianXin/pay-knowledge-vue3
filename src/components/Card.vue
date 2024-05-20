<template>
  <div :class="cardClass">
    <div :class="imageClass" :style="{ backgroundImage: `url(${image})` }" v-if="image"></div>
    <div v-else :class="[icon, 'w-20 h-20']"></div>
    <div v-if="title || subTitle" :class="titleClass">
      <p class="text-lg text-dark-300 text-bold pb-2 line-clamp-1">{{ title }}</p>
      <p class="text-sm text-dark-100 font-300 line-clamp-2">{{ subTitle }}</p>
    </div>
    <slot :item="{ image, icon, title, subTitle, url }"></slot>
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  image?: string
  icon?: string
  title?: string
  subTitle?: string
  url?: string
  border?: boolean
  imageType?: Card.ImageType
}

const props = withDefaults(defineProps<CardProps>(), {
  imageType: 'default'
})

const cardClass = computed(() => {
  const defaultClassList = ['flex', 'flex-col', 'w-80']
  if (props.icon) {
    defaultClassList.push('items-start', 'p-4')
  }
  if (props.imageType === 'rounded') {
    defaultClassList.push('rounded', 'overflow-hidden')
  } else if (props.imageType === 'avatar') {
    defaultClassList.push('relative', 'mt-10')
  }
  if (props.border) {
    defaultClassList.push('border', 'border-gray-300')
  }
  return defaultClassList.join(' ')
})

const imageClass = computed(() => {
  const defaultClassList = ['bg-image']
  if (!props.title && !props.subTitle && props.imageType === 'rounded') {
    defaultClassList.push('h-60', 'rounded')
  } else if (props.imageType === 'avatar') {
    const avatarList = [
      'h-20',
      'w-20',
      'rounded-1/2',
      'self-center',
      'absolute top-0',
      'translate-y--1/2'
    ]
    defaultClassList.push(...avatarList)
  } else {
    defaultClassList.push('h-40')
  }
  return defaultClassList.join(' ')
})

const titleClass = computed(() => {
  const defaultClassList = ['flex', 'flex-col', 'items-start', 'p-4']
  if (props.imageType === 'avatar') {
    defaultClassList.push('pt-15')
  }
  return defaultClassList.join(' ')
})
</script>

<style scoped></style>
