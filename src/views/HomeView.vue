<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted, inject } from 'vue';
import AuthWidget from '../components/AuthenticationOptions.vue';
import { onAuthStateChanged } from 'firebase/auth';


const isAuthenticated = ref(false);
// Inject the firebaseAuth instance from app config or provide/inject
const firebaseAuth = inject('$auth');

onMounted(() => {

  onAuthStateChanged(firebaseAuth, (user) => {
    isAuthenticated.value = !!user;
    console.log('Auth state changed. User is authenticated:', isAuthenticated.value);
  });
});
</script>

<template>
  <main>
    <AuthWidget v-if="!isAuthenticated" />
    <TheWelcome v-else/>
  </main>
</template>
