<template>
  <button class="item" @click="handleClick">
   <slot name="label">Button Label</slot>
</button>
</template>

<script setup>
/* note that defineEmits is a vue compiler macro */
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
/*
 This Widget renders a button with a defined style. It works by accepting the button label
 as a slot provided by the parent component, actions will be tied to it in the parent component
 with a click handler which is why this item emits click event
 */





