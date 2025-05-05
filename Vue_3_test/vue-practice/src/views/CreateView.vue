<template>
  <h1 style="color: brown">Create Page</h1>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="userInfo.username" placeholder="Username" />
    <input type="text" v-model="userInfo.email" placeholder="Email" />
    <input type="text" v-model="userInfo.phone" placeholder="Phone" />
    <button type="submit">Create</button>
    <header>
      
    </header>
  </form>
</template>
<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const userInfo = reactive({
  username: '',
  email: '',
  phone: '',
})
const handleSubmit = async () => {
  const res = await axios.post('http://localhost:3000/users', {
    username: userInfo.username,
    email: userInfo.email,
    phone: userInfo.phone,
  })
  const data = await res.data
  console.log(data)
  alert('Create user successfully')
  userInfo.username = ''
  userInfo.email = ''
  userInfo.phone = ''
}
</script>
