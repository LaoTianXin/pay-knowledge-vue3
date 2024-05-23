<template>
  <!-- 推荐内容 -->

  <Container class="flex-col items-start!">
    <div class="lesson-title">推荐内容</div>

    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full lt-sm:(px-4 grid-cols-1)"
    >
      <a
        :href="item.url"
        target="_blank"
        v-for="(item, index) in lessons.slice(0, 4)"
        :key="index"
        class="flex"
      >
        <Card
          class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
          :image="item.image"
          image-type="rounded"
          :title="item.title"
          border
        >
          <template #default>
            <div class="px-4 pb-4">
              <div class="flex mb-2">
                <div
                  class="text-sm text-gray"
                  v-for="(tag, index) in item.tagList"
                  :key="tag"
                >
                  <span class="mx-2" :class="{ hidden: index === 0 }">|</span>
                  {{ tag }}
                </div>
              </div>

              <div class="flex justify-between items-center cursor-pointer">
                <div class="text-sm text-gray">
                  <span class="mr-2">￥{{ item.price }}</span>
                  <span>{{ item.num }}人学习</span>
                </div>

                <div>
                  <div class="i-raphael:cart w-1.5em h-1.5em text-sky"></div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </a>
    </div>
  </Container>

  <Container class="flex-col items-start!">
    <div class="lesson-title">每日一课</div>

    <Tabs v-model:active-index="activeIndex" :tab-list="tabList"></Tabs>
    <div class="flex gap-3">
      <div class="w-1/4">
        <a
          :href="item.url"
          target="_blank"
          v-for="(item, index) in lessons.slice(0, 1)"
          :key="index"
          class="flex h-full"
        >
          <Card
            class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            border
          >
            <template #default>
              <div class="px-4 pb-4">
                <div class="flex mb-2">
                  <div
                    class="text-sm text-gray"
                    v-for="(tag, index) in item.tagList"
                    :key="tag"
                  >
                    <span class="mx-2" :class="{ hidden: index === 0 }">|</span>
                    {{ tag }}
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </a>
      </div>
      <div class="w-3/4">
        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full lt-sm:(px-4 grid-cols-1)"
        >
          <a
            :href="item.url"
            target="_blank"
            v-for="(item, index) in lessons
              .slice(0, 4)
              .concat(lessons.slice(0, 4))"
            :key="index"
            class="flex"
          >
            <Card
              class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
              :image="item.image"
              image-type="rounded"
              :title="item.title"
              border
            >
              <template #default>
                <div class="px-4 pb-4">
                  <div class="flex mb-2">
                    <div
                      class="text-sm text-gray"
                      v-for="(tag, index) in item.tagList"
                      :key="tag"
                    >
                      <span class="mx-2" :class="{ hidden: index === 0 }"
                        >|</span
                      >
                      {{ tag }}
                    </div>
                  </div>
                </div>
              </template>
            </Card>
          </a>
        </div>
      </div>
    </div>
  </Container>

  <Container class="flex-col items-start! py-4">
    <div class="lesson-title">精品微课</div>

    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full lt-sm:(px-4 grid-cols-1)"
    >
      <a
        :href="item.url"
        target="_blank"
        v-for="(item, index) in lessons.slice(0, 4)"
        :key="index"
        class="flex"
      >
        <Card
          class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
          :image="item.image"
          image-type="rounded"
          :title="item.title"
          border
        >
          <template #default>
            <div class="px-4 pb-4">
              <div class="flex mb-2">
                <div
                  class="text-sm text-gray"
                  v-for="(tag, index) in item.tagList"
                  :key="tag"
                >
                  <span class="mx-2" :class="{ hidden: index === 0 }">|</span>
                  {{ tag }}
                </div>
              </div>

              <div class="flex justify-between items-center cursor-pointer">
                <div class="text-sm text-gray">
                  <span class="mr-2">￥{{ item.price }}</span>
                  <span>{{ item.num }}人学习</span>
                </div>

                <div>
                  <div class="i-raphael:cart w-1.5em h-1.5em text-sky"></div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </a>
    </div>
  </Container>

  <Container class="flex-col items-start! py-4">
    <div class="lesson-title">学习计划</div>

    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full lt-sm:(px-4 grid-cols-1)"
    >
      <a
        :href="item.url"
        target="_blank"
        v-for="(item, index) in lessons.slice(0, 4)"
        :key="index"
        class="flex"
      >
        <Card
          class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
          :image="item.image"
          image-type="rounded"
          :title="item.title"
          border
        >
          <template #default>
            <div class="px-4 pb-4">
              <div class="flex mb-2">
                <div
                  class="text-sm text-gray"
                  v-for="(tag, index) in item.tagList"
                  :key="tag"
                >
                  <span class="mx-2" :class="{ hidden: index === 0 }">|</span>
                  {{ tag }}
                </div>
              </div>

              <div class="flex justify-between items-center cursor-pointer">
                <div class="text-sm text-gray">
                  <span class="mr-2">￥{{ item.price }}</span>
                  <span>{{ item.num }}人学习</span>
                </div>

                <div>
                  <div class="i-raphael:cart w-1.5em h-1.5em text-sky"></div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </a>
    </div>
  </Container>

  <Container class="flex-col items-start! py-4">
    <div class="lesson-title">优质专栏</div>

    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full lt-sm:(px-4 grid-cols-1)"
    >
      <a
        :href="item.url"
        target="_blank"
        v-for="(item, index) in lessons.slice(0, 4)"
        :key="index"
        class="flex"
      >
        <Card
          class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
          :image="item.image"
          image-type="rounded"
          :title="item.title"
          border
        >
          <template #default>
            <div class="px-4 pb-4">
              <div class="flex mb-2">
                <div
                  class="text-sm text-gray"
                  v-for="(tag, index) in item.tagList"
                  :key="tag"
                >
                  <span class="mx-2" :class="{ hidden: index === 0 }">|</span>
                  {{ tag }}
                </div>
              </div>

              <div class="flex justify-between items-center cursor-pointer">
                <div class="text-sm text-gray">
                  <span class="mr-2">￥{{ item.price }}</span>
                  <span>{{ item.num }}人学习</span>
                </div>

                <div>
                  <div class="i-raphael:cart w-1.5em h-1.5em text-sky"></div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </a>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { lessons } from '@/constant/study'

const activeIndex = ref(0)
const tabList = ['Java', 'Vue', 'React', '小程序']
</script>

<style scoped></style>
