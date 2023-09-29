<template>
    <div class="motorola-selection">
      <div class="motorola-selection-header">
        <h1>Selecciona tu dispositivo Motorola</h1>
      </div>
      <div class="motorola-selection-models">
        <div class="motorola-selection-model" v-for="model in models" :key="model.name">
          <img :src="model.image" :alt="'Motorola ' + model.name" @click="goToPhoneProblemsSelectionView(model)">
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
            name: "Motorola Moto G Power (2023)",
            image: "https://m.media-amazon.com/images/I/61QKKdjHV0L.jpg",
          },
          {
            name: "Motorola Moto G Stylus (2023)",
            image: "https://m.media-amazon.com/images/I/61bBVbson4L.jpg",
          },
          {
            name: "Motorola Edge+ (2023)",
            image: "https://m.media-amazon.com/images/I/61bBVbson4L.jpg",
          },
          // Agrega más modelos de Motorola según sea necesario
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
  .motorola-selection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .motorola-selection-header {
    text-align: center;
    font-size: 24px;
    margin-top: -5%;
  }
  
  .motorola-selection-models {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  
  .motorola-selection-model {
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
  
  .motorola-selection-model img {
    width: auto;
    filter: brightness(1.1);
    height: 100%;
  }
  
  .motorola-selection-model p {
    text-align: center;
    font-size: 16px;
  }
  </style>
  