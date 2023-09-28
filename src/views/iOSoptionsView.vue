<template>
    <div class="iphone-selection">
      <div class="iphone-selection-header">
        <h1>Selecciona tu dispositivo</h1>
      </div>
      <div class="iphone-selection-models">
        <div class="iphone-selection-model" v-for="model in models" :key="model.name">
          <img :src="model.image" alt="iPhone {{ model.name }}" @click="goToPhoneProblemsSelectionView(model)">
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
            name: "iPhone 14 Pro Max",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg",
          },
          {
            name: "iPhone 14 Pro",
            image: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202210/06/00194612500143____8__1200x1200.jpg",
          },
          {
            name: "iPhone 14",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-3.jpg",
          },
          {
            name: "iPhone 13 Pro Max",
            image: "https://shopmi.pe/wp-content/uploads/2023/02/iphone_13_pro_max_5.jpg",
          },
          {
            name: "iPhone 13 Pro",
            image: "https://doc.iwant.cz/pic/V0UY000501-600-600.jpg",
          },
          {
            name: "iPhone 13",
            image: "https://promart.vteximg.com.br/arquivos/ids/3488047-1000-1000/image-9855ed180c6e4c479b016bbef6036ed3.jpg?v=637756065765070000",
          },
          {
            name: "iPhone 12 Pro Max",
            image: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-silver.jpg",
          },
          {
            name: "iPhone 12 Pro",
            image: "https://www.appleperu.pe/wp-content/uploads/12-pro.jpg",
          },
          {
            name: "iPhone 12",
            image: "https://http2.mlstatic.com/D_NQ_NP_883119-MLA46153583666_052021-O.webp",
          },
          {
            name: "iPhone 11 Pro Max",
            image: "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11-pro/iphone-11-pro-midnight-green.jpg",
          },
          {
            name: "iPhone 11 Pro",
            image: "https://laptronic.pe/wp-content/uploads/2020/02/iphone-11-pro-max-512-gb.jpg",
            },
            {
            name: "iPhone 11",
            image: "https://promart.vteximg.com.br/arquivos/ids/1206857-1000-1000/image-9a89c1502629422090c89070f88fee8e.jpg?v=637601702882900000",
            },
            {
            name: "iPhone XS Max",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-max-5.jpg",
            },
            {
            name: "iPhone XS",
            image: "https://plazavea.vteximg.com.br/arquivos/ids/26782016-512-512/image-efcdbbefed494c7c9db638fbee9d5ee1.jpg",
            },
            {
            name: "iPhone XR",
            image: "https://i0.wp.com/icenter.pe/wp-content/uploads/2021/11/iphone-xr-blue.jpeg",
            },
            {
            name: "iPhone X",
            image: "https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg",
            },
            {
            name: "iPhone 8 Plus",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-8-plus-0.jpg",
            },
            {
            name: "iPhone 8",
            image: "https://www.apple.com/newsroom/images/product/iphone/standard/iPhone8Plus_color_selection_inline.jpg.large.jpg",
            },
            {
            name: "iPhone 7 Plus",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-7-plus-red.jpg",
            },
            {
            name: "iPhone 7",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPmTlD64UcbqIWu8O4OxlJuPWG4IY2xFpAQ&usqp=CAU",
            },
            {
            name: "iPhone 6S Plus",
            image: "https://puntomac.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbFlZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4325dd6ab1c16ca315ba8fcf1c9ac11beb14bf18/ecfe8a153439f011.png",
            },
            {
            name: "iPhone 6S",
            image: "https://i2.wp.com/syscom.com.pe/wp-content/uploads/2020/09/iphone6s-2_1rosa.jpg?fit=700%2C700&ssl=1",
            },
            {
            name: "iPhone 6 Plus",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-6-plus-1.jpg",
            },
            {
            name: "iPhone 6",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-6-1.jpg",
            },
            {
            name: "iPhone SE",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2020-2.jpg",
            },
            {
            name: "iPhone 5S",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-5s-ofic.jpg",
            },
            {
            name: "iPhone 5C",
            image: "https://m.media-amazon.com/images/I/71mOJbedEiL.jpg",
            },
            {
            name: "iPhone 5",
            image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-5s-ofic.jpg",
            },
            {
            name: "iPhone 4S",
            image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-4s-new.jpg",
            },
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
  .iphone-selection {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  
  .iphone-selection-header {
    text-align: center;
    font-size: 24px;
    margin-top: -5%;
  }
  
  .iphone-selection-models {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

  }

  .iphone-selection-model {
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
  
  .iphone-selection-model img {
    width: auto;
    
    height: 100%;
  }
  
  .iphone-selection-model p {
    text-align: center;
    font-size: 16px;
  }
  </style>
  