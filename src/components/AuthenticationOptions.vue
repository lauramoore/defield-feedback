<template>
  <div id="firebaseui-auth-container"></div>
  <div style="text-align: center; margin-top: 1rem;">
    <button @click="signInGuest">Continue as Guest</button>
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue';
import * as firebaseui from 'firebaseui';
import { GoogleAuthProvider, EmailAuthProvider, signInAnonymously } from 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';

// Inject the firebaseAuth instance from app config or provide/inject
const firebaseAuth = inject('$auth');

const signInGuest = () => {
  if (firebaseAuth) {
    signInAnonymously(firebaseAuth).catch((error) => {
      console.error('Anonymous auth failed', error);
    });
  }
};

onMounted(() => {
  if (!firebaseAuth) {
    console.error('firebaseAuth instance not found. Make sure it is provided.');
    return;
  }
  const ui = new firebaseui.auth.AuthUI(firebaseAuth);
  const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
      {
        provider: GoogleAuthProvider.PROVIDER_ID,
        providerName: 'Google',
        customParameters: {
          // Example: prompt: 'select_account'
        }
      },
      {
        provider: EmailAuthProvider.PROVIDER_ID,
        providerName: 'Email',
        signInMethod: 'password'
      }
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    // tosUrl: 'http://localhost/test-tos',
    // privacyPolicyUrl: 'http://localhost/test-privacy',
  };
  ui.start('#firebaseui-auth-container', uiConfig);
});
</script>
