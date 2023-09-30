<script setup>
import "primeicons/primeicons.css";
</script>

<template>
  <div class="container">
    <div class="image-container">
      <img src="successfullypasswordchanged.jpg" alt="Woman holding a clipboard">
    </div>
    <div class="content-container">
      <div v-if="usuarioElige === null" class="buttons">
        <h3>Bienvenido a PhoneResQ</h3>
      <p>Selecciona tu opción</p>
      <button @click="eligeCliente">Cliente</button><br>
      <button @click="eligeTecnico">Técnico</button>
      </div>
      <div v-else>
    <div class="account-info" v-if="usuarioElige === 'vistacliente'">
      <h3>Bienvenido a PhoneResQ</h3>
      <p>Cliente</p>
      <button @click="volverInicio">Volver atrás</button><br>
      <button @click="iniciaSesionCliente">Iniciar Sesión</button><br>
      <button @click="registraCliente">Crear Cuenta</button>
    </div>
    <div class="account-info" v-if="usuarioElige === 'vistatecnico'">
      <h3>Bienvenido a PhoneResQ</h3>
      <p>Técnico</p>
      <button @click="volverInicio">Volver atrás</button><br>
      <button @click="iniciaSesionTecnico">Iniciar Sesión</button><br>
      <button @click="registraTecnico">Crear Cuenta</button>
    </div>

    <div class="account-info" v-if="usuarioElige === 'iniciaSesionCliente'">
      <button @click="volverAtras">Volver atrás</button>
      <h3>Ingrese a su cuenta</h3>
      <p>Cliente</p>
      <a href="#"><img src="@/assets/Google.png" style="width: 10px" alt="Google"> Continuar con Google </a><br>
      <a href="#"><img src="@/assets/Facebook.png" style="width: 10px" alt="Facebook"> Continuar con Facebook </a><br>
      <a>Todavía no te has registrado?</a><a @click="registraCliente">Crear Cuenta</a>
      <div class="info-row">
        <label>Correo Electrónico</label>
        <input type="text" v-model="correoCliente">
        <label>Contraseña</label>
        <input type="password" v-model="contrasenaCliente">
        <input type="checkbox" id="recordarme" >
        <label for="recordarme" class="checkbox-label">Acuérdate de mí</label>
        <a href="forgotpassword"> ¿Has olvidado tu contraseña? </a><br>
        <button @click="sesionIniciadaCliente">Iniciar Sesión</button>
      </div>
    </div>

    <div class="account-info" v-if="usuarioElige === 'iniciaSesionTecnico'">
      <button @click="volverAtras">Volver atrás</button>
      <h3>Ingrese a su cuenta</h3>
      <p>Técnico</p>
      <a href="#"><img src="@/assets/Google.png" style="width: 10px" alt="Google"> Continuar con Google </a><br>
      <a href="#"><img src="@/assets/Facebook.png" style="width: 10px" alt="Facebook"> Continuar con Facebook </a><br>
      <a>Todavía no te has registrado?</a><a @click="registraTecnico">Crear Cuenta</a>
      <div class="info-row">
        <label>Correo Electrónico</label>
        <input type="text" v-model="correoTecnico">
        <label>Contraseña</label>
        <input type="password" v-model="contrasenaTecnico">
        <input type="checkbox" id="recordarme" >
        <label for="recordarme" class="checkbox-label">Acuérdate de mí</label>
        <a href="forgotpassword"> ¿Has olvidado tu contraseña? </a><br>
        <button @click="sesionIniciadaTecnico()">Iniciar Sesión</button>
      </div>
    </div>
  </div>
  </div>


</div>

 
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      usuarioElige: null,
      historialVistas: ['inicio'],
    };
  },
  methods: {
    eligeCliente() {
      this.usuarioElige = 'vistacliente';
      this.historialVistas.push('vistacliente');
    },
    eligeTecnico() {
      this.usuarioElige = 'vistatecnico';
      this.historialVistas.push('vistatecnico');
    },
    iniciaSesionCliente() {
      this.usuarioElige = 'iniciaSesionCliente';
      this.historialVistas.push('iniciaSesionCliente');
    },
    registraCliente() {
      this.$router.push({name: 'registracliente'});
    },
    iniciaSesionTecnico() {
      this.usuarioElige = 'iniciaSesionTecnico';
      this.historialVistas.push('iniciaSesionTecnico');
    },
    registraTecnico() {
      this.$router.push({name: 'registertecnical'});
    },
    volverAtras() {
      if (this.historialVistas.length > 1) {
        const vistaAnterior = this.historialVistas.pop();
        this.usuarioElige = vistaAnterior;
      } else {
        this.usuarioElige = 'inicio';
      }
    },

    volverInicio() {
      if (this.historialVistas.length > 1) {
        const vistaAnterior = this.historialVistas.pop();
        this.usuarioElige = vistaAnterior;
      } else {
        this.usuarioElige = null; // Devuelve a la vista de inicio si el historial está vacío
      }
    },


    sesionIniciadaCliente() {
      if (!this.validarCorreo(this.correoCliente)) {
        alert("Correo electrónico no válido.");
        return;
      }
      if (this.contrasenaCliente.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
      }
      else{
        this.$emit("value-received", true);
        this.$router.push({name: 'sisopchoose'});
      }

      // Resto de la lógica de inicio de sesión de cliente
    },

    // Para el login de técnico
    sesionIniciadaTecnico() {
      if (!this.validarCorreo(this.correoTecnico)) {
        alert("Correo electrónico no válido.");
        return;
      }
      if (this.contrasenaTecnico.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
      }
      else{
        this.$emit("value-received", true);
        this.$router.push({name: 'inicio'});
      }

      // Resto de la lógica de inicio de sesión de técnico
    },

    validarCorreo(correo) {
      // Validar el correo para que termine en @gmail.com o @hotmail.com
      return correo.endsWith("@gmail.com") || correo.endsWith("@hotmail.com");
    },
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Esto asegura que el contenedor ocupe toda la altura de la pantalla */
}

.image-container {
  max-width: 100%;
  margin-bottom: 20px;
}

.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Ajusta las clases existentes según sea necesario */
.buttons, .account-info {
  width: 100%;
  max-width: 400px; /* Cambia esto según tus necesidades de diseño */
  padding: 20px;
}

/* Agrega media queries para hacerlo responsive */
@media screen and (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .image-container {
    flex: 1;
  }

  .content-container {
    flex: 1;
  }
}
img {
    width: 100%;
    height: auto;
  }
.div{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
.p{
  color: #000;
  text-align: center;
  font-family: "Mulish", sans-serif;
  font-size: 16px;
  font-style: normal;
  margin: 5%;
  font-weight: 400;
  line-height: 131.25%;
  letter-spacing: -0.32px;
  position: absolute;
  left: 47px;
}
.account-info{
  width: 100%;
  gap: 50px;
  text-align: center;
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
  width: 100%;
  flex-shrink: 0;
  text-align: left;

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
  width: 100%;
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
  margin-bottom: 3%;
  text-align: center;
  color: #ccc;
  font-family: 'Mulish', sans-serif;
  font-size: 14px;
  width: 50%;
  height: auto;
  padding: 16px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #243347;
}
</style>
