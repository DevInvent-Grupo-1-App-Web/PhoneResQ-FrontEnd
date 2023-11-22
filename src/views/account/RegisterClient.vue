<template>
  <div id="appuser">
    <h2>Empecemos a crear tu cuenta</h2>
    <br>
    <div class="form">
      <div class="account-info">
        <span class="p-float-label info-row">
          <InputText v-model="nombres" @input="validarNombres" />
          <label for="nombres">Nombres</label>
          <small v-if="errors.nombres">Nombre no válido</small>
        </span>
        <span class="p-float-label info-row">
          <InputText v-model="dni" />
          <label for="dni">DNI</label>
          <small v-if="errors.dni">DNI no válido</small>
        </span>
        <span class="p-float-label info-row">
          <InputText v-model="telefono" />
          <label for="telefono">Teléfono</label>
          <small v-if="errors.telefono">Teléfono no válido</small>
        </span>
        <span class="p-float-label info-row">
          <InputText v-model="correo" />
          <label for="correo">Correo Electrónico</label>
          <small v-if="errors.correo">Correo no válido</small>
        </span>
        <span class="p-float-label info-row">
          <Password v-model="contrasena" />
          <label for="contrasena">Contraseña</label>
        </span>
        <span class="p-float-label info-row">
          <Password v-model="repetirContrasena" />
          <label for="repetirContrasena">Repetir contraseña</label>
        </span>
        <Button @click="registrarme()">Registrarme</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "primeicons/primeicons.css";
import { ICustomerRequest } from "./../domain/model/Types";
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";

// Data

const router = useRouter();
const nombres = ref('');
const dni = ref('');
const telefono = ref('');
const correo = ref('');
const contrasena = ref('');
const repetirContrasena = ref('');
const errors = reactive({
  nombres: '',
  dni: '',
  fechaNacimiento: '',
  sexo: '',
  telefono: '',
  correo: '',
  contrasena: '',
  repetirContrasena: '',
});

// Methods

const registrarme = async () => {
  validarNombres();
  validarDni();
  validarTelefono();
  validarCorreo();
  if (Object.values(errors).every(error => error === '')) {
    const customerRequest: ICustomerRequest = {
      name: nombres.value,
      dni: dni.value,
      phone: telefono.value,
      email: correo.value,
      password: contrasena.value
    };

    try {
      const response = await axios.post('http://172.203.177.103:8080/api/v1/Customer', JSON.stringify(customerRequest), {
        headers: {
          'Content-Type': 'application/json',
        }
      }); 
      alert('Registro exitoso');
      console.log(response);
      // router.push('/inicio');
    } catch (error) {
      alert('Error al registrar');
      return;
    }
  }
};

function validarDni() {
  dni.value = dni.value.replace(/\D/g, '');
  if (!/^\d{8}$/.test(dni.value)) {
    errors.dni = 'Error';
  }
  else {
    errors.dni = '';
  }
}
function validarTelefono() {
  if (!/^\+51\d{9}$/.test(telefono.value)) {
    errors.telefono = 'Error';
  }
  else {
    errors.telefono = '';
  }
}
function validarNombres() {
  if (!/^[a-zA-Z\s]+$/.test(nombres.value)) {
    errors.nombres = 'Error';
  }
  else {
    errors.nombres = '';
  }
}
function validarCorreo() {
  if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(correo.value)) {
    errors.correo = 'Error';
  }
  else {
    errors.correo = '';
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost&family=Mulish:wght@200&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #ffff;
  }
}

.form {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  fill: #FFF;
  filter: drop-shadow(2px 69px 42px rgba(200, 200, 200, 0.25));
  margin: 38.7px;


}

#appuser {
  margin: 38.7px;
  font-family: 'Nunito Sans', sans-serif;
  text-align: left;
  color: #2c3e50;
  flex-shrink: 0;
  fill: #FFF;
  filter: drop-shadow(0px 69px 42px rgba(200, 200, 200, 0.25));
  background: var(--True-White, #FFF);
}

.account-info {
  width: 100%;
  gap: 50px;
  text-align: left;
  height: 80%;
  margin: 38.7px;

}

h2 {
  text-align: left;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: 93.75%;
  background: linear-gradient(180deg, #243347 0%, rgba(36, 51, 71, 0.00) 164.44%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 90px;
  margin-bottom: -95px;
}

.info-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  flex-shrink: 0;
  margin: 38.7px;
}

div.form {

  width: 100%;
  height: 100%;
  flex-shrink: 0;
  fill: #FFF;
  margin: 38.7px;
  filter: drop-shadow(0px 69px 42px rgba(200, 200, 200, 0.25));
}

input,
select {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  flex-shrink: 0;
  color: #403F3F;
  font-family: 'Mulish', sans-serif;
  height: 80%;
  flex-shrink: 0;
}

button {
  display: inline-flex;
  color: #ccc;
  padding: 16px 80px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #243347;
}
</style>
