<template>
  <div class="flex-1 bg-gray p-4 h-full">
    <Container class="flex-col">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white w-full mb-4 flex justify-between"
      >
        <div class="flex p-4 items-center">
          <div class="pr-4 cursor-pointer">
            <div v-if="true" class="i-mingcute:checkbox-line w-1em h-1em"></div>
            <div v-else class="i-ri:checkbox-fill w-1em h-1em"></div>
          </div>

          <div class="flex items-center">
            <div
              class="bg-cover w-40 h-30 mr-4"
              :style="{ backgroundImage: `url(${item.image})` }"
            ></div>
            <div class="flex flex-col items-start justify-between self-stretch">
              <div class="text-xl font-bold">{{ item.title }}</div>
              <div class="text-sm text-gray-500">
                <div class="my-3">{{ item.teacher }} | {{ item.type }}</div>
                <div>{{ item.num }}购买 | 已更新：{{ item.upadate }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-lg flex">
          <div
            class="flex px-10 justify-center items-center border-x-1 border-x-gray"
          >
            ￥{{ item.price }}
          </div>
          <div
            @click="() => (showModel = true)"
            class="flex px-6 justify-center items-center text-red cursor-pointer"
          >
            删除
          </div>
        </div>
      </div>

      <div class="justify-end h-20 bg-white w-full flex justify-between p-2">
        <div class="flex items-center">
          <div class="pr-4 cursor-pointer">
            <div v-if="true" class="i-mingcute:checkbox-line w-1em h-1em"></div>
            <div v-else class="i-ri:checkbox-fill w-1em h-1em"></div>
          </div>
          <span class="text-gray">全选</span>
        </div>

        <div class="flex items-center">
          <div class="text-lg text-gray">
            合计：<span class="text-orange text-xl">￥999</span>
          </div>
          <div class="btn ml-4">结算</div>
        </div>
      </div>
    </Container>
    <Teleport to="body">
      <Modal v-model="showModel">确定要删除吗</Modal>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import bg from '@/assets/images/bg.png'

const showModel = ref(false)
interface CardItem {
  title: string
  teacher: string
  image: string
  num: string | number
  price: string | number
  type: string
  upadate: string
}

interface CardProps {
  items: CardItem[]
}

withDefaults(defineProps<CardProps>(), {
  items: () => [
    {
      title: '大前端高级工程师',
      teacher: 'tomic',
      image: bg,
      num: '1231',
      price: '999',
      upadate: '10/20',
      type: '前端'
    }
  ]
})
</script>

<style scoped></style>
