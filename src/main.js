import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router';

// read json file from assets/internationalization into a 'strings' const
const messages = {
    es: {
        global: {
            client: 'Cliente',
            technician: 'Técnico',
            goBack: 'Volver',
            logIn: 'Iniciar sesión',
            createAccount: 'Crear cuenta',
        },
        session: {
            welcomeToPhoneResQ: 'Bienvenido a PhoneResQ',
            chooseAnOption: 'Elige una opción',
            continueGoogle: 'Continuar con Google',
            continueFacebook: 'Continuar con Facebook',
            email: 'Correo electrónico',
            password: 'Contraseña',
            rememberMe: 'Recuérdame',
            haveForgotPassword: '¿Olvidaste tu contraseña?',
            logIn: 'Iniciar sesión',
            notRegisteredYet: '¿Aún no te has registrado?',
            createAccount: 'Crear cuenta',
        }
    },
    en:
    {
        global: {
            client: 'Client',
            technician: 'Technician',
            goBack: 'Go back',
            logIn: 'Log in',
            createAccount: 'Create account',
            names: 'Names',
            surnames: 'Surnames',
            email: 'Email',
            password: 'Password',
            phoneNumber: 'Phone number',
        },
        session: {
            welcomeToPhoneResQ: 'Welcome to PhoneResQ',
            chooseAnOption: 'Choose an option',
            continueGoogle: 'Continue with Google',
            continueFacebook: 'Continue with Facebook',
            rememberMe: 'Remember me',
            haveForgotPassword: 'Have you forgot your password?',
            logIn: 'Log in',
            notRegisteredYet: 'Not registered yet?',
            createAccount: 'Create account',
        },
        account: {
            myAccount: "My account",

            profile: 'Profile',
        }
    }
}

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages
})

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)
app.use(i18n)

app.mount('#app')
