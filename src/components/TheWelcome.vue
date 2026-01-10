<script setup>
import { shallowRef, ref } from 'vue';
import WelcomeItem from './WelcomeItem.vue';
import KudosForm from './KudosForm.vue';
import ProblemForm from './ProblemForm.vue';
import {getTeam} from './AppData.js';
import TeamSelector from './TeamSelector.vue'

const currentView = shallowRef(null);
const team = ref(getTeam());

const showKudosForm = () => {
  currentView.value = KudosForm;
}
const showProblemForm = () => {
  currentView.value = ProblemForm;
}

const onTeamSelected = () => {
  team.value = getTeam();
}
</script>

<template>
<component :is="currentView" v-if="currentView" :team-number="team" @cancel="currentView = null" @submit="currentView = null" />
<div v-else>
  <h1>Welcome to Feedback Portal</h1>
  <div v-if="team">
     Your Team: {{ team }}
  </div>
  <TeamSelector v-else @team-selected="onTeamSelected"></TeamSelector>
  <WelcomeItem @click="showKudosForm">
    <template #label>Give Kudos</template>
  </WelcomeItem>
  <WelcomeItem @click="showProblemForm">
    <template #label>Report Problem</template>
  </WelcomeItem>
</div>
</template>
gti
