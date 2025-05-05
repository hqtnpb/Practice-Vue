<template>
  <button :class="buttonBase" @click="onClick" :isActive>
    <slot></slot>
  </button>
</template>
<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const emit = defineEmits(['click'])
const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})
const buttonBase = computed(() => {
  return [
    props.class,
    { 'hero-section__btn--active': props.isActive, 'hero-section__btn--inactive': !props.isActive },
  ]
})

const onClick = (e) => {
  emit('click', e)
}
</script>

<style lang="scss" scoped>
// Hero Section Button
.hero-section__btn {
  width: 199px;
  height: 54px;
  border-radius: 8px;
  color: #f9f9f9;
  font-size: 1.6rem;
  line-height: 1.62;
  &--active {
    background: linear-gradient(90deg, #eb9204 -33.14%, #83e868 116.38%);
  }
  &--inactive {
    background: #282c30;
    box-shadow: 1px 8px 45px 0px rgba(0, 0, 0, 0.25);
  }
}
</style>
