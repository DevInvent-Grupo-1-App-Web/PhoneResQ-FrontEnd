<template>
    <div class="huawei-selection">
      <div class="huawei-selection-header">
        <h1>Selecciona tu dispositivo Huawei</h1>
      </div>
      <div class="huawei-selection-models">
        <div class="huawei-selection-model" v-for="model in models" :key="model.name">
          <img :src="model.image" :alt="'Huawei ' + model.name" @click="goToPhoneProblemsSelectionView(model)">
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
            name: "Huawei P50 Pro",
            image: "https://http2.mlstatic.com/D_NQ_NP_888882-MLA49739271414_042022-O.webp",
          },
          {
            name: "Huawei P50",
            image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p50/list/black.png",
          },
          {
            name: "Huawei Mate 40 Pro",
            image: "https://www.teknofilo.com/wp-content/uploads/2020/08/Huawei-Mate-40-Pro-scaled.jpg",
          },
          {
            name: "Huawei Mate 40",
            image: "https://smartphonesperu.pe/wp-content/uploads/2022/09/SMARTPHONES-PERU-VENTA-DE-EQUIPOS-Y-SERVICIO-TECNICO_0030_HUAWEI-REPARACION-MATE-40.jpg",
          }
          // Agrega más modelos de Huawei según sea necesario
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
  .huawei-selection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .huawei-selection-header {
    text-align: center;
    font-size: 24px;
    margin-top: -5%;
  }
  
  .huawei-selection-models {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  
  .huawei-selection-model {
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
  
  .huawei-selection-model img {
    width: auto;
    filter: brightness(1.1);
    height: 100%;
  }
  
  .huawei-selection-model p {
    text-align: center;
    font-size: 16px;
  }
  </style>
  