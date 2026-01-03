<script setup>
import { shallowRef } from 'vue';
import WelcomeItem from './WelcomeItem.vue';
import KudosForm from './KudosForm.vue';
import ProblemForm from './ProblemForm.vue';

const currentView = shallowRef(null);

const showKudosForm = () => {
  currentView.value = KudosForm;
}
const showProblemForm = () => {
  currentView.value = ProblemForm;
}
</script>

<template>
<component :is="currentView" v-if="currentView" />
<div v-else>
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
