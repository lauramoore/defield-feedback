import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFunctions, connectFunctionsEmulator, httpsCallable } from 'firebase/functions'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'

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
const db = getFirestore(firebaseApp)
if (window.location.hostname === 'localhost') {
  connectAuthEmulator(getAuth(firebaseApp), 'http://localhost:9099');
  connectFunctionsEmulator(functions, 'localhost', 5001);
  connectFirestoreEmulator(db, 'localhost', 8081 )
}
const auth = getAuth(firebaseApp)
const submit = httpsCallable(functions, 'submitFeedback')
const app = createApp(App)

app.provide('$auth', auth)
app.provide('$submit', submit)
app.provide('$db', db)


app.mount('#app')
