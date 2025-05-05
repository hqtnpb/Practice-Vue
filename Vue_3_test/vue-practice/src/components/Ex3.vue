<template>
  <div>
    <h1>Ex3</h1>
    <p>Task:</p>
    <input type="text" v-model="newTask" placeholder="Enter your task" />
    <button @click="handleAddTask">Add Task</button>
    <p>Task count: {{ taskCount }}</p>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        id: {{ index + 1 }} - {{ task.name }} - {{ task.completed }}
        <button @click="handleDeleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const store = useStore()

const tasks = computed(() => store.getters['ex3/getTasks'])
const newTask = ref('')
const taskCount = computed(() => tasks.value.length)

const handleAddTask = () => {
  if (newTask.value.trim() === '') {
    alert('Please enter a task')
    return
  }
  store.commit('ex3/addTask', { name: newTask.value, completed: false })
  newTask.value = ''
}
const handleDeleteTask = (index) => {
  store.commit('ex3/removeTask', index)
}
</script>
