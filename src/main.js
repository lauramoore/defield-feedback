import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'

// these are local dev only - do not use in production
const firebaseConfig = {
    apiKey: 'fake-api-key',
    authDomain: 'localhost',
    projectId: 'defield-data',
    storageBucket: 'defield-firebase.appspot.com',
    messagingSenderId: '1234567890',
    appId: '1:1234567890:web:abcdef123456'
}

const firebaseApp = initializeApp(firebaseConfig)
const functions = getFunctions(firebaseApp)
if (window.location.hostname === 'localhost') {
  connectAuthEmulator(getAuth(firebaseApp), 'http://localhost:9099');
  connectFunctionsEmulator(functions, 'localhost', 5001);
}
const auth = getAuth(firebaseApp)
const app = createApp(App)
app.provide('$auth', auth)
app.provide('$functions', functions)

app.mount('#app')
