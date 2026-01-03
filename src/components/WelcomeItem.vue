<template>
  <button class="item" @click="handleClick">
   <slot name="label">Button Label</slot>
</button>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<style scoped>
  .item {
    display: block;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.25rem;
    color: var(--color-on-primary);
    background-color: var(--color-primary);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;
  }
</style>





