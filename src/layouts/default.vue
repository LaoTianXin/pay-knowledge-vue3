<template>
  <div class="pt-30">
    <div class="bg-dark-100 h-30 fixed top-0 w-full z-99" :class="{ 'shadow-2xl': y > 0 }">
      <Container>
        <RouterLink to="/" class="w-32 h-18 mr-10 cursor-pointer">
          <img src="@/assets/images/logo.png" alt="toimc" />
        </RouterLink>
        <NavBar></NavBar>
      </Container>
    </div>
    <router-view></router-view>
    <div class="h-3000"></div>
    <footer>footer</footer>
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<style scoped></style>
