<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted, inject, onUnmounted } from 'vue';
import AuthWidget from '../components/AuthenticationOptions.vue';
import { onAuthStateChanged } from 'firebase/auth';


const isAuthenticated = ref(false);
const isLoading = ref(true);
// Inject the firebaseAuth instance from app config or provide/inject
const firebaseAuth = inject('$auth');
let authListener;

onMounted(() => {
  authListener = onAuthStateChanged(firebaseAuth, (user) => {
    isAuthenticated.value = !!user;
    isLoading.value = false;
    console.log('Auth state changed. User is authenticated:', isAuthenticated.value);
  });
});

onUnmounted(() => {
  if (authListener) authListener();
});
</script>

<template>
  <main>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <AuthWidget v-if="!isAuthenticated" />
      <TheWelcome v-else/>
    </div>
  </main>
</template>
