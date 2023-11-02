<script setup>
import "primeicons/primeicons.css";

</script>

<template>
  <div id="appuser">
    <h2>{{ $t('account.myAccount') }}</h2>
    <br>
    <div class="form">
      <div class="account-info">

        <div class="info-row">
          <label>{{ $t('global.names') }}</label>
          <input type="text" v-model="nombres">
        </div>
        <div class="info-row">
          <label>{{ $t('global.surnames') }}</label>
          <input type="text" v-model="apellidos">
        </div>
        <div class="info-row">
          <label>{{ $t('global.email') }}</label>
          <input type="email" v-model="correo">
        </div>
        <div class="info-row">
          <label>{{ $t('global.phoneNumber') }}</label>
          <input type="tel" v-model="telefono">
        </div>
        <div class="info-row">
          <label>{{ $t('account.profile') }}</label>
          <select v-model="perfil">
            <option value="técnico">Técnico</option>
            <option value="comercial">Comercial</option>
            <option value="administrativo">Administrativo</option>
          </select>
        </div>
        <button @click="cerrarSesion()">Cerrar sesión</button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'AccountView',
  data() {
    return {
      nombres: "Juan",
      apellidos: "reyes",
      correo: "test@test.com",
      telefono: "93066666",
      perfil: "técnico"
    };
  },
  methods: {
    cerrarSesion() {
      this.$emit("value-received", false);
      this.$router.push({ name: 'login' });
    }
  }
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

label {
  font-weight: bold;
  margin-right: 10px;
  width: 600px;
  flex-shrink: 0;

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
}</style>
  