<template>
    <div class="xiaomi-selection">
      <div class="xiaomi-selection-header">
        <h1>Selecciona tu dispositivo Xiaomi</h1>
      </div>
      <div class="xiaomi-selection-models">
        <div class="xiaomi-selection-model" v-for="model in models" :key="model.name">
          <img :src="model.image" :alt="'Xiaomi ' + model.name" @click="goToPhoneProblemsSelectionView(model)">
          <p>{{ model.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        models: [
          {
            name: "Xiaomi Mi 12 Pro",
            image: "https://equiposlibres.pe/wp-content/uploads/2022/04/xiaomi-12-pro-256gb-didongviet.jpg",
          },
          {
            name: "Xiaomi Mi 12",
            image: "https://falabella.scene7.com/is/image/FalabellaPE/gsc_120708745_2774836_1?wid=800&hei=800&qlt=70",
          },
          {
            name: "Xiaomi Mi 11 Pro",
            image: "https://pe.celulares.com/fotos/xiaomi-mi-11-pro-90658-g-alt.jpg",
          },
          // Agrega más modelos de Xiaomi según sea necesario
        ],
      };
    },
    methods: {
      goToPhoneProblemsSelectionView(model) {
        // Envia la imagen y el nombre del modelo al siguiente frame
        this.$router.push({
          query: {
            image: model.image,
            modelName: model.name,
          },
          name: "phoneproblems",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .xiaomi-selection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .xiaomi-selection-header {
    text-align: center;
    font-size: 24px;
    margin-top: -5%;
  }
  
  .xiaomi-selection-models {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  
  .xiaomi-selection-model {
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 5%;
    margin-bottom: 3%;
    align-items: center;
    margin-left: 3%;
    margin-right: 3%;
    cursor: pointer;
  }
  
  .xiaomi-selection-model img {
    width: auto;
    filter: brightness(1.1);
    height: 100%;
  }
  
  .xiaomi-selection-model p {
    text-align: center;
    font-size: 16px;
  }
  </style>
  