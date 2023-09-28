<template>
    <div class="container">
        
      <div class="header">
        <h1>¿Cuál es tu problema?</h1>
      </div>
      <div class="body">
       </div>
        <div class="problemas">
            <div class="telinfo">
        <img :src="image" alt="Imagen del modelo">
      <p>{{ modelName }}</p>
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
  .telinfo{
    align-items: left;

  }
  div.telinfo{

    margin-left: -50%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  
  .container {
    width: 400px;
    margin: 0 auto;
  }
  
  .header {
    text-align: center;
  }
  
  .body {
    padding: 20px;
  }
  
  .problemas {
    list-style: none;
    margin: 0 0 20px 0;
  }
  img{
    margin-top: 20%;
    width: 22%;
    align-items: left;
    height: 10%;
    display: flex;
  }
  
  .problemas li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .problemas li input {
    margin-right: 10px;
  }
  
  .otro {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .otro input {
    margin-right: 10px;
  }
  
  input[type="checkbox"] {
    cursor: pointer;
  }
  </style>
  