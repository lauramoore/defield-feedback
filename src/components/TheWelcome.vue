<script setup>
import WelcomeItem from './WelcomeItem.vue';
const showKudosForm = () => {
  alert("kudos!");
}
const showProblemForm = () => {
  alert("Problem !!")
}
</script>

<template>
<div>
  <h1>Welcome to Feedback Portal</h1>
  <p>Choose an option below to get started:</p>
  <WelcomeItem @click="showKudosForm">
    <template #label>Give Kudos</template>
  </WelcomeItem>
  <WelcomeItem @click="showProblemForm">
    <template #label>Report Problem</template>
  </WelcomeItem>
</div>
</template>
