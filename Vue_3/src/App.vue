<template>
  <!-- <HomePage /> -->

  <p>Count: {{ store.state.count }}</p>
  <span @click="increment">Incre </span>
  <span @click="decrement">Descre </span>
  <span @click="store.commit('reset')">Reset</span>
  <input type="text" v-model="newValue" />
  <button @click="handleChangeValue">Change value</button>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue'
import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'

const store = useStore()
const newValue = ref(store.state.count)
const count = computed(() => store.state.count)
const increment = () => {
  store.commit('increment')
}
const decrement = () => {
  store.commit('decrement')
  if (store.state.count < 0) {
    store.commit('reset')
  }
}
const handleChangeValue = () => {
  const value = newValue.value
  store.commit('change', value)
}
</script>

<style scoped></style>
