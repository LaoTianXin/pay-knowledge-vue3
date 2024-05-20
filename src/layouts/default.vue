<template>
  <div class="pt-18">
    <div
      class="bg-dark-100 h-18 fixed top-0 w-full z-99"
      :class="{ 'shadow-2xl': y > 0 }"
    >
      <Container>
        <RouterLink to="/" class="w-32 h-18 mr-10 cursor-pointer lt-sm:mx-auto">
          <img src="@/assets/images/logo.png" alt="toimc" />
        </RouterLink>
        <div
          class="hidden i-ic-round-menu text-gray-300 text-xl absolute right-5 top-5 cursor-pointer hover:text-white lt-sm:block"
          @click="() => toggle()"
        ></div>
        <NavBar v-show="show"></NavBar>
      </Container>
    </div>
    <router-view></router-view>
    <div class="h-300"></div>
    <div>
      <footer class="mobile-hide">footer</footer>
      <footer class="hidden mobile"><MobileFooter></MobileFooter></footer>
    </div>
  </div>
</template>

<script setup lang="ts">
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

<style scoped></style>
