<template>
  <div>
    <h1>Ex1</h1>
    <p>Count: {{ count }}</p>
    <button @click="handleIncrement">Increment</button>
    <button @click="handleDecrement">Decrement</button>
    <button @click="handleReset">Reset</button>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

const count = computed(() => store.state.ex1.count)
const handleIncrement = () => store.commit('ex1/increment')
const handleDecrement = () => {
  if (count.value > 0) {
    store.commit('ex1/decrement')
  }
}
const handleReset = () => store.commit('ex1/reset')
</script>
