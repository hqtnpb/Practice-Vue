<template>
  <div>
    <h1>Ex5</h1>
    <div v-for="user in listUser">{{ user }}</div>
    <button @click="handleFetchUser">Fetch User</button>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const listUser = computed(() => store.getters['ex5/getUser'])

const handleFetchUser = () => {
  store.dispatch('ex5/fetchUser')
}
</script>
