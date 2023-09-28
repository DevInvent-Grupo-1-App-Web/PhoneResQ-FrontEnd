<template>
  <div class="container">
    <div class="header">
      <h1>¿Cuál es tu problema?</h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        <img :src="image" alt="Imagen del modelo">
        <p>{{ modelName }}</p>
      </div>
      <div class="col-md-6">
        <div class="problemas">
          <div class="telinfo">
            <ul>
              <li v-for="problema in problemas" :key="problema.id">
                <input type="checkbox" :value="problema.id" v-model="problemasSeleccionados">
                {{ problema.nombre }}
              </li>
            </ul>
          </div>
          <div class="otro">
            <input type="checkbox" id="otro" value="otro" v-model="otroSeleccionado">
            <label for="otro">Otro</label>
            <input type="text" v-if="otroSeleccionado" placeholder="Escribe tu problema">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


  
  <script>
  export default {
    data() {
      return {
        problemas: [
          { id: 1, nombre: "Pantalla rota o agrietada" },
          { id: 2, nombre: "Batería agotada o problemas de carga" },
          { id: 3, nombre: "Problemas de sonido" },
          { id: 4, nombre: "Botones no funcionan" },
          { id: 5, nombre: "Problemas de software" },
          { id: 6, nombre: "Cámara rota o de mala calidad" },
        ],
        image: "",
        modelName: "",
        problemasSeleccionados: [],
        otroSeleccionado: false,
      };
    },
    mounted() {
  // Obtiene la imagen y el nombre del modelo de los parámetros de ruta
     this.image = this.$route.query.image;
     this.modelName = this.$route.query.modelName;
    },
    methods: {
      // Cuando se selecciona la opción "Otro", cancela la selección de las demás marcadas y abre una caja de texto
      toggleOtro() {
        if (this.otroSeleccionado) {
          this.problemasSeleccionados = [];
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  
  p{
    margin-top: 5%;
    font-size: 30px;
  }
  .header {
    margin-top: -8%;
    text-align: center;
    margin-bottom: 50px;
  }
  ul {
    list-style-type: none;
    align-items: left;
    text-align: left;
  }
  .container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
img {
  width: auto;
  height: 30%;
  margin-top: 10%;
}
.container .row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
input{
  width: auto;
  height: auto;
  margin-right: 10%;
}
li {
  margin-top: 10%;
  align-items: center;
  text-align: left;
  display: flex;
}
.otro{
  margin-top: 10%;
  align-items: center;
  text-align: left;
  display: flex;
  margin-left: 11%;
}
div.col-md-6{
  margin-left: -5%;
}

.container .row .col-md-6 {
  text-align: center;
}

  </style>
  