<template>
  <div class="container">
    <div class="content">
      <h1>Restablecimiento de contraseña</h1>
      <input type="password" class="password-input" placeholder="Digite su nueva contraseña" />
      <input type="password" class="password-input" placeholder="Ingrese nuevamente la contraseña" />
      <button @click="redirectToOtraPagina">Cambiar contraseña</button>
    </div>
    <div class="header">
      <img class="girlwp" src="@/assets/forgetpasswordimg.jpg" alt="Girl with pencil">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    redirectToOtraPagina() {
      // Redirige al usuario a la otra página
      this.$router.push('/password-changed-successfully')
    },
  },
  created() {
    this.$root.showNavbar = false; // Oculta el navbar en la página de inicio de sesión
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
}

.content {
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  
}
.header {
  flex: 1;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(36, 51, 71, 0.80);
}


.girlwp {
  max-width: 80%;
  height: auto;
}

h1 {
  margin-top: -20%;
  color: #525252;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}


input {
  display: flex;
  width: 70%;
  margin-left: 15%;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 13px 10px ;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #878D95;
  gap: 13px;
}

button {
  display: flex;
  width: 70%;
  margin-left: 15%;
  padding: 13px 10px 12px 10px;
  justify-content: center;
  align-items: center;
  gap: 13px;
  top: 98px;
  color: #ffffff;
  border-radius: 6px;
  background: rgba(36, 51, 71, 0.80);
}
</style>
