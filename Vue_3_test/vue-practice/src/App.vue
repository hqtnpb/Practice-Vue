<template>
  <header>
    <RouterLink to="/">Home Todo</RouterLink>
    <RouterLink to="/create">Create Todo</RouterLink>
  </header>

  <RouterView></RouterView>
  <!-- <HomePage></HomePage> -->
</template>
<script setup>
import HomePage from './views/HomeView.vue'
</script>

<style scoped></style>
