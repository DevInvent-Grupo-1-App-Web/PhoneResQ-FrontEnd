<template>
    <div class="samsung-selection">
      <div class="samsung-selection-header">
        <h1>Selecciona tu dispositivo Samsung</h1>
      </div>
      <div class="samsung-selection-models">
        <div class="samsung-selection-model" v-for="model in models" :key="model.name">
          <img :src="model.image" :alt="'Samsung ' + model.name" @click="goToPhoneProblemsSelectionView(model)">
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
            name: "Samsung Galaxy S23 Ultra",
            image: "https://promart.vteximg.com.br/arquivos/ids/6867032-1000-1000/image-0416c55bcc76449b921bf7c0915814a6.jpg?v=638148753844600000",
          },
          {
            name: "Samsung Galaxy S23+",
            image: "https://images.samsung.com/is/image/samsung/p6pim/pe/2302/gallery/pe-galaxy-s23-s916-sm-s916bzglltp-534844493?$650_519_PNG$"
          },
          {
            name: "Samsung Galaxy S23",
            image: "https://falabella.scene7.com/is/image/FalabellaPE/19611486_1?wid=800&hei=800&qlt=70"
          },
          {
            name: "Samsung Galaxy S22 Ultra",
            image: "https://falabella.scene7.com/is/image/FalabellaPE/19611486_1?wid=800&hei=800&qlt=70",
          },
          {
            name: "Samsung Galaxy S22+",
            image: "https://home.ripley.com.pe/Attachment/WOP_5/2065289383150/2065289383150_2.jpg",
          },
          {
            name: "Samsung Galaxy S22",
            image: "https://falabella.scene7.com/is/image/FalabellaPE/18758850?wid=1500&hei=1500&qlt=70",
          },
          // Agrega más modelos de Samsung según sea necesario
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
  .samsung-selection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .samsung-selection-header {
    text-align: center;
    font-size: 24px;
    margin-top: -5%;
  }
  
  .samsung-selection-models {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  
  .samsung-selection-model {
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
  
  .samsung-selection-model img {
    width: auto;
    filter: brightness(1.1);
    height: 100%;
  }
  
  .samsung-selection-model p {
    text-align: center;
    font-size: 16px;
  }
  </style>
  