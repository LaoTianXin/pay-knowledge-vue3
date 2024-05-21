<template>
  <div class="pt-18">
    <div
      class="bg-dark-100 h-18 fixed top-0 w-full z-99 transition-all duration-400"
      :class="[
        { 'shadow-2xl bg-black': y > 0 },
        { 'lt-sm:( bg-black h-full)': show }
      ]"
    >
      <Container>
        <RouterLink to="/" class="w-32 h-18 mr-10 cursor-pointer lt-sm:mx-auto">
          <img src="@/assets/images/logo.png" alt="toimc" />
        </RouterLink>
        <div
          class="hidden text-gray-300 text-xl absolute right-5 top-5 cursor-pointer hover:text-white lt-sm:block"
          @click="() => toggle()"
        >
          <Transition name="rotate-icon" mode="out-in">
            <div v-if="show" class="i-radix-icons:cross-2"></div>
            <div v-else class="i-ic-round-menu"></div>
          </Transition>
        </div>
        <NavBar :navs="navList" v-show="show"></NavBar>
      </Container>
    </div>
    <router-view></router-view>
    <div>
      <footer class="mobile-hide">
        <DefaultFooter v-bind="footerProp" :navList="navList"></DefaultFooter>
      </footer>
      <footer class="hidden mobile"><MobileFooter></MobileFooter></footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navList } from '@/constant/default'
import * as footerProp from '@/constant/default'

const { y } = useWindowScroll()
const [show, toggle] = useToggle(false)

const flag = ref(false)
useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if (width >= 640) {
    toggle(true)
    flag.value = false
  } else {
    if (flag.value) return
    flag.value = true
    toggle(false)
  }
})
</script>

<style lang="scss" scoped>
.rotate-icon-enter-active {
  animation: scaleYIn 0.2s;
}

.rotate-icon-leave-active {
  animation: scaleYIn 0.2s reverse;
}

@keyframes scaleYIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
