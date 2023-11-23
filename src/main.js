import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { initializeApp } from 'firebase/app';

import App from './App.vue'
import router from './router'

const firebaseConfig = {
    apiKey: "AIzaSyCeCuy8nB3sM4tZ5hep4n0BGuwS1k0CZMo",
    authDomain: "phoneresq-22d13.firebaseapp.com",
    projectId: "phoneresq-22d13",
    storageBucket: "phoneresq-22d13.appspot.com",
    messagingSenderId: "191419013703",
    appId: "1:191419013703:web:1473ec79a405376c872f62"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)

app.mount('#app')
