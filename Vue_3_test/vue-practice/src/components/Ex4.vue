<template>
  <div>
    <h1>Ex4</h1>
    <p>Count: {{ count }}</p>
    <button @click="handleIncrement">Increment slow</button>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()

const count = computed(() => store.getters['ex4/getCount'])
const handleIncrement = () => {
  store.dispatch('ex4/incrementAsync')
}
</script>
