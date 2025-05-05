<template>
  <Ex1></Ex1>
  <Ex2></Ex2>
  <Ex3></Ex3>
  <Ex4></Ex4>
  <Ex5></Ex5>
  <h1 style="color: brown">Home Page</h1>
  <input type="text" name="" id="" placeholder="Search" v-model="searchValue" />

  <div class="users-list" v-for="user in filterUsers" :key="user.id">
    <div class="user-item">
      <div class="user-item__name" @click="router.push(`/todo/${user.id}`)">
        {{ user.username }}
      </div>
      <div class="user-item__email">{{ user.email }}</div>
      <button @click="handleDelete(user.id)">Delete</button>
    </div>
  </div>
</template>
<script setup>
import Ex1 from '@/components/Ex1.vue'
import Ex2 from '@/components/Ex2.vue'
import Ex3 from '@/components/Ex3.vue'
import Ex4 from '@/components/Ex4.vue'
import Ex5 from '@/components/Ex5.vue'

import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
const users = ref([])
const router = useRouter()

const searchValue = ref('')
onMounted(() => {
  const fetchUsers = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // const data = await res.json()
    // users.value = data
    const res = await axios.get('http://localhost:3000/users')
    const data = await res.data
    users.value = data
  }
  fetchUsers()
})
const filterUsers = computed(() => {
  return users.value.filter((item) => {
    return item.username.toLowerCase().indexOf(searchValue.value.toLowerCase()) !== -1
  })
})
const handleDelete = async (id) => {
  const res = await axios.delete(`http://localhost:3000/users/${id}`)
  const data = await res.data
  console.log(data)
  alert('Delete user successfully')
  users.value = users.value.filter((item) => item.id !== id)
}
</script>
