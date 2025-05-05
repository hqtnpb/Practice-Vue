<template>
  <div>
    <h1>Ex2</h1>
    <p>Count: {{ count }}</p>
    <input type="number" v-model="newValue" placeholder="Enter a new value" />
    <button @click="handleChange">Submit Change</button>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const store = useStore()

const newValue = ref('')

const count = computed(() => store.getters['ex2/getCount'])

const handleChange = () => {
  if (isNaN(newValue.value) || newValue.value === '') {
    alert('Please enter a valid positive number')
    return
  }
  store.commit('ex2/setCount', newValue.value)
  newValue.value = ''
}
</script>
