<template>
  <div class="team-selector">
    <h2>Select Your Team</h2>
    <div class="form-group">
      <label for="team-select">Team:</label>
      <select id="team-select" v-model="selectedTeam" @change="onTeamSelected">
        <option value="" disabled>Please select a team</option>
        <option v-for="team in teams" :key="team.id" :value="team.id">{{ team.name }}</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { getTeam, saveTeam } from './AppData.js';
import { collection, getDocs } from 'firebase/firestore';

const db = inject('$db');
const teams = ref([]);
const selectedTeam = ref('');

const emit = defineEmits(['teamSelected']);

const onTeamSelected = () => {
  if (selectedTeam.value) {
    saveTeam(selectedTeam.value);
    emit('teamSelected', getTeam() );
  }
};

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, 'teams'));
  teams.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});
</script>

<style scoped>
.team-selector {
  background-color: var(--color-background-soft);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 2rem auto;
  text-align: center;
}

h2 {
  color: var(--color-heading);
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

</style>
