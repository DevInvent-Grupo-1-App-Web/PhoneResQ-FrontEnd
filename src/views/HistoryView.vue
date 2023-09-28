<template>
    <div class="container">
      <div class="row">
        <p class="title">Servicios Realizados</p>
        <div class="col-md-12">
          <button class="btn-primary" id="btn-ordenar">Ordenar</button>
        </div>
      </div>
      <div class="row" id="servicios-realizados">
        <div class="col-md-4" v-for="servicio in servicios" :key="servicio.id">
          <div class="card">
            <div class="card-body">
                <img class="card-img-top" :src="servicio.tecnico.foto" alt="Foto de perfil del técnico">
              <p class="card-text">
                Estado: {{ servicio.estado }}
                <br>
                Cliente: {{ servicio.cliente }}
                <br>
                Precio: {{ servicio.precio }} soles
                <br>
                Problema: {{ servicio.problema }}
                <br>
                Técnico: {{ servicio.tecnico.nombre }}
              </p>
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
        servicios: [
          {
            id: 1,
            cliente: "Cinderella",
            precio: 100,
            problema: "Pantalla rota",
            tecnico: {
              foto: "https://picsum.photos/200/200",
              nombre: "Juan"
            },
            estado: "En reparación"
          },
          {
            id: 2,
            cliente: "Benny",
            precio: 210,
            problema: "No encendía el dispositivo móvil",
            tecnico: {
              foto: "https://picsum.photos/200/200",
                nombre: "Juan"
            },
            estado: "Reparado"
          },
          {
            id: 3,
            cliente: "Aisha",
            precio: 80,
            problema: "No funcionaba la pantalla",
            tecnico: {
              foto: "https://picsum.photos/200/200",
                nombre: "Juan"
            },
            estado: "Reparado"
          }
        ]
      };
    },
    methods: {
      ordenar() {
        // Aquí se implementa el filtrado de los servicios
      }
    }
  };
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jost&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');
  .service-card-title{
    display: flex;
    padding: 8px 16px;
    flex-direction: column;
    gap: 4px;
    flex: 1 0 0;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  
  h1 {
    text-align: center;
  }
  
  #btn-ordenar {
    float: left;
    margin-left: 10%;
    margin-top: 10%;
  }
  
  #servicios-realizados {
    display: flex;
    margin-top: 15%;
    margin-left: 12%;
    flex-direction: column;
  }
  .card-text{
    color: #243347;
    font-family: "Nunito Sans", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .btn-primary{
    color: #ccc;
    padding: 14px;
    border: none;
    width: 10%;
    border-radius: 8px;
    background: #243347;
    
  }
  .card {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  .card-img-top {
    margin-top: 1%;
    width: 40px;
    height: 39px;
    border-radius: 40px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
    flex-shrink: 0;
  }

  div.card-body{
    display: flex;
    width: 85%;
    height: 100%;
    padding: 4px 16px;
    justify-content: left;
    gap: 30px;
    flex-shrink: 0;

  }
  .title {
    font-weight: bold;
    text-align: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: 65px;
    font-style: normal;
    font-weight: 700;
    line-height: 82%;
    background: linear-gradient(180deg, #243347 0%, rgba(36, 51, 71, 0.00) 164.44%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: -7%;
  }
  
  .card-body {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 4px 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    background: var(--Purple-White, #F6F6FE);  }
  
  </style>
  