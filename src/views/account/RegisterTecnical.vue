<template>
  <div id="technician">
    <h2>Let's start creating your account</h2>
    <br>
    <div class="form">
      <div class="account-info">
        <span class="p-float-label info-row">
          <InputText v-model="names" @input="validateNames" />
          <label for="names">Names</label>
          <small v-if="errors.names">Invalid name</small>
        </span>
        <span class="p-float-label info-row">
          <InputText v-model="dni" />
          <label for="dni">DNI</label>
          <small v-if="errors.dni">Invalid DNI</small>
        </span>
        <span class="p-float-label info-row">
          <InputText v-model="phone" />
          <label for="phone">Phone</label>
          <small v-if="errors.phone">Invalid phone</small>
        </span>
        <span class="p-float-label info-row">
          <InputText v-model="email" />
          <label for="email">Email</label>
          <small v-if="errors.email">Invalid email</small>
        </span>
        <span class="p-float-label info-row">
          <Password v-model="password" />
          <label for="password">Password</label>
        </span>
        <span class="p-float-label info-row">
          <Password v-model="repeatPassword" />
          <label for="repeatPassword">Repeat password</label>
        </span>
        <Button @click="register()">Register</Button>
      </div>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";

export default {
  name: 'RegisterTecnical',
  data() {
    return {
      nombres: '',
      apellidos: '',
      fechaNacimiento: '',
      sexo: '',
      telefono: '',
      correo: '',
      contrasena: '',
      repetirContrasena: '',
    };
  },
  methods: {

    registrarme() {

      if (!this.validarNombres(this.nombres)) {
        alert("Nombres no válidos. Solo se permiten letras.");
        return;
      }
      if (!this.validarNombres(this.apellidos)) {
        alert("Apellidos no válidos. Solo se permiten letras.");
        return;
      }
      if (!this.validarFechaNacimiento(this.fechaNacimiento)) {
        alert("Fecha de nacimiento no válida.");
        return;
      }
      if (!this.validarSexo(this.sexo)) {
        alert("Sexo no válido. Debe ser 'Masculino' o 'Femenino'.");
        return;
      }
      if (!this.validarTelefono(this.telefono)) {
        alert("Teléfono no válido. Debe empezar con +51 seguido de 9 números.");
        return;
      }
      if (!this.validarCorreo(this.correo)) {
        alert("Correo electrónico no válido.");
        return;
      }
      if (this.contrasena.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
      }
      if (this.contrasena !== this.repetirContrasena) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      else{
        this.$router.push({ name: 'support-center-register' });
      }

    },
    validarTelefono() {
      // Elimina cualquier carácter que no sea un número
      this.telefono = this.telefono.replace(/\D/g, '');
      return /^\+51\d{9}$/.test(telefono);
    },

    restrictInput(event) {
      // Reemplazar el valor del campo con solo letras y espacios
      event.target.value = event.target.value.replace(/[^A-Za-z\s]/g, '');
    },

    validarNombres(texto) {
      // Validar que solo se permitan letras en los nombres
      return /^[a-zA-Z]+$/.test(texto);
    },
    validarFechaNacimiento(fecha) {
      // Puedes agregar una validación más específica según tus requerimientos
      return true;
    },
    validarSexo(texto) {
      // Validar que el sexo sea 'Masculino' o 'Femenino'
      return /^masculino$|^femenino$/i.test(texto);
    },

    validarCorreo(correo) {

      return /* Tu validación de correo personalizada */;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost&family=Mulish:wght@200&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');

@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #ffff;
  }
}
.form{
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
.account-info{
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

.telefono-input {
  display: flex;
  align-items: center;
  gap: 5px;
}
.telefono-input span {
  background-color: #eee;
  padding: 5px;
}
.telefono-input input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width:200px
}

.info-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  flex-shrink: 0;
  margin: 38.7px;


}

label {
  font-weight: bold;
  margin-right: 10px;
  width: 600px;
  flex-shrink: 0;

}
div.form{

  width: 100%;
  height: 100%;
  flex-shrink: 0;
  fill: #FFF;
  margin: 38.7px;
  filter: drop-shadow(0px 69px 42px rgba(200, 200, 200, 0.25));
}
input, select {
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
