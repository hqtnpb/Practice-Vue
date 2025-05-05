<template>
  <h1 style="color: brown">Todo Detail {{ router.params.id }}</h1>
  <p>{{ user.email }}</p>
  <p>{{ user.phone }}</p>
  <p>{{ user.name }}</p>
  <p>{{ user.username }}</p>
  
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()
const user = ref({
  id: '',
  name: '',
  username: '',
  email: '',
})
onMounted(() => {
  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/users/${router.params.id}`)
    const data = await res.json()
    user.value = data
  }
  fetchData()
})
</script>
<style>

</style>
