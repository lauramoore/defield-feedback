<template>
  <div class="kudos-form">
    <h2>Report a Problem</h2>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="teamNumber">Your Team:</label>
        <input id="teamNumber" type="number" maxlength="6">
      </div>
      <div class="form-group">
        <label for="sessionId">DE Session</label>
        <input id="sessionId" type="">
      </div>
      <div class="form-group">
        <label for="feedback">Details:</label>
        <textarea id="feedback" v-model="kudosMessage" required></textarea>
      </div>
      <button type="submit" class="submit-button">Submit</button>
      <button type="button" class="cancel-button" @click="cancelForm">Cancel</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const kudosMessage = ref('');
const emit = defineEmits(['submit', 'cancel']);

const submit = async () => {
  try {
    const response = await fetch('https://your-project-id.cloudfunctions.net/submitKudos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: kudosMessage.value
       })
    });

    if (!response.ok) throw new Error('Network response was not ok');

    emit('submit', kudosMessage.value);
    kudosMessage.value = ''; // Clear the form after submission
  } catch (error) {
    console.error('Error submitting kudos:', error);
  }
};

const cancelForm = () => {
  emit('cancel');
  kudosMessage.value = ''; // Clear the form on cancel
};
</script>

<style scoped>
.kudos-form {
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
  min-height: 120
}
</style>
