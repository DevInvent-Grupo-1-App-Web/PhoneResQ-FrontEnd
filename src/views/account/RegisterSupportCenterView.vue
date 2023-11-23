<template>
    <div id="appuser">
      <h2>Empecemos a crear tu cuenta</h2>
      <br>
  
      <div class="form">
        <div class="account-info">
  
          <div class="info-row">
            <label for="name">Nombre del Centro de Soporte</label>
            <input
              type="text"
              id="name"
              v-model="supportCenter.name"
            >
          </div>
          <div class="info-row">
            <label for="ruc">RUC</label>
            <input
              type="text"
              id="ruc"
              v-model="supportCenter.ruc"
            >
          </div>
          <div class="info-row">
            <label for="address">Dirección</label>
            <input
              type="text"
              id="address"
              v-model="supportCenter.address"
            >
          </div>
  
          <button @click="registrarCentroSoporte()">Registrar Centro de Soporte</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'RegisterSupportCenter',
    data() {
      return {
        supportCenter: {
          name: '',
          ruc: '',
          address: '',
        },
      };
    },
    created() {
    this.$root.showNavbar = false; // Oculta el navbar en la página de inicio de sesión
  },
    methods: {
      registrarCentroSoporte() {
        // Aquí debes enviar los datos del supportCenter al servidor para crear una instancia de SupportCenter
        // Puedes utilizar una solicitud HTTP (por ejemplo, Axios) para enviar los datos al servidor
        // Ejemplo ficticio:
        axios.post('http://localhost:5290/api/v1/supportcenter', this.supportCenter)
          .then(response => {
            console.log(response);
            // Manejar la respuesta del servidor, por ejemplo, redirigir a otra página
            this.$root.isTechnician = true;
            this.$root.isLoggedIn = true;
            this.$root.showNavbar = true;
            this.$router.push({ name: 'dashboard' });
          })
          .catch(error => {
            // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
            console.error('Error al registrar el centro de soporte:', error);
          });
      },
    },
  };
  </script>
  
  <!-- Estilos (mantenidos igual) -->
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
}  </style>
  