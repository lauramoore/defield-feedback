<template>
  <div class="problem-form">
    <h2>Give problem</h2>
    <form @submit.prevent="submitproblem">
      <div class="form-group">
        <label for="session-id">DE Session</label>
        <input id="session-id" type="text" v-model="sessionId">
      </div>
      <div>
        <label for="topic">Category</label>
        <select id="topic" v-model="topic" required>
          <option value="">Choose one</option>
          <option value="tbd">Load from backend</option>
          <option value="other">other</option>
        </select>
      </div>
      <div class="form-group">
        <label for="feedback">Details:</label>
        <textarea id="feedback" v-model="problemMessage" required></textarea>
      </div>
      <button type="submit" class="submit-button">Submit</button>
      <button type="button" class="cancel-button" @click="cancelForm">Cancel</button>
    </form>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { getTeam } from './AppData'


const problemMessage = ref('');
const sessionId = ref('');
const topic = ref('');
const callable = inject('$submit');
const emit = defineEmits(['submit', 'cancel']);

const submitproblem = async () => {
  try {
    const result = await callable({
      feedback: problemMessage.value,
      teamNumber: getTeam().value,
      sessionId: sessionId.value,
      category: topic.value
    });

    emit('submit', result);
    problemMessage.value = ''; // Clear the form after submission
  } catch (error) {
    console.error('Error submitting problem:', error.code, error.message);
  }
};

const cancelForm = () => {
  emit('cancel');
  problemMessage.value = ''; // Clear the form on cancel
};
</script>

<style scoped>
.problem-form {
  background-color: var(--color-background-soft);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 2rem auto;
}

h2 {
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  font-weight: bold;
}

textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
}
</style>
