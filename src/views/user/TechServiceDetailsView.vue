<template>
    
    <div id="servicecard">
        <div class="service-card-header">
        <p class="service-card-title">Servicio Técnico</p>
        </div>
        <p class="service-name">Nombre Servicio Técnico</p>
        <div class="service-card">
      <div class="service-card-body">
        <div class="service-card-details">
          <p class="service-card-detail">Servicio 01</p>
          <p class="service-card-detail">Dueño: Cinderella</p>
          <p class="service-card-detail">Estado: En reparación</p>
          <p class="service-card-detail">Descripción: Nuestro servicio de reparación de pantalla rota está diseñado para devolverle la vida a tu dispositivo móvil de manera rápida y eficiente. Sabemos lo frustrante que puede ser enfrentarse a una pantalla dañada, por lo que nuestro equipo de técnicos altamente capacitados está listo para poner manos a la obra y hacer que tu teléfono vuelva a lucir como nuevo.</p>
          <p class="service-card-detail">Observación: La rotura de pantalla es uno de los problemas más comunes que enfrentan los usuarios de dispositivos móviles. Nuestros expertos no solo se encargarán de reemplazar la pantalla dañada, sino que también verificarán y solucionarán cualquier otro problema relacionado que pueda haber surgido debido al impacto.</p>
          <p class="service-card-detail">Costo: s/100</p>
        </div>
        <div class="service-card-actions">
          <button>Generar Observación</button>&nbsp;
          <button>Chatear con el cliente</button>
        </div>
      </div>
    </div>
    </div>
    
  </template>
  
  <script>
  export default {
    name: "ServiceCard",
    data() {
      return {
        // Datos del servicio
        service: {
          name: "Servicio Técnico",
          number: "Servicio 01",
          owner: "Cinderella",
          status: "En reparación",
          description: "Nuestro servicio de reparación de pantalla rota está diseñado para devolverle la vida a tu dispositivo móvil de manera rápida y eficiente. Sabemos lo frustrante que puede ser enfrentarse a una pantalla dañada, por lo que nuestro equipo de técnicos altamente capacitados está listo para poner manos a la obra y hacer que tu teléfono vuelva a lucir como nuevo.",
          observation: "La rotura de pantalla es uno de los problemas más comunes que enfrentan los usuarios de dispositivos móviles. Nuestros expertos no solo se encargarán de reemplazar la pantalla dañada, sino que también verificarán y solucionarán cualquier otro problema relacionado que pueda haber surgido debido al impacto.",
          cost: 5,
        },
      };
    },
  };
  </script>
  
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jost&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');

    #servicecard{
        margin-top: 7%;
        justify-content: center;
        height: 100%;
        width: 80%;
        background: var(--Purple-White, #F6F6FE);
    }
    div.service-card-body{
        display: flex;

    }
  .service-card {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    margin-left: 10%;
    border-radius: 0.5rem;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    background: var(--Purple-White, #F6F6FE);
  }
  .service-name{
    color: #243347;
    font-family: "Nunito Sans", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 10.5%;
  }
  
  .service-card-header {
    justify-content: space-between;
    width: 100%;
    align-content: center;
  }
  
  .service-card-title {
    margin-left: 10%;
    font-weight: bold;
    text-align: left;
    font-family: "Nunito Sans", sans-serif;
    font-size: 65px;
    font-style: normal;
    font-weight: 700;
    line-height: 82%;
    background: linear-gradient(180deg, #243347 0%, rgba(36, 51, 71, 0.00) 164.44%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .service-card-body {
    padding: 1rem;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    gap: 34px;
    flex-shrink: 0;
  }
  
  .service-card-details {
    height: 100%;
    width: 80%;
    align-items: flex-start;
    gap: 34px;
    flex-shrink: 0;
  }
  
  .service-card-detail {
    font-size: 1rem;
    display: flex;
    font-weight: normal;
    color: var(--grey-400, #7C8DB0);
    font-family: "Nunito Sans", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
  }
  
  .service-card-actions {
    padding-right: 12px;
    align-items: center;
    width: 100%;
    height: 100%;   
  }
  
  button {
    border-radius: 8px;
    color: #F6F6FE;
    width: 80%;
    
    padding: 10px;
    height: 80%;
    background: #243347;
  }
  
  @media (max-width: 500px) {
    .service-card {
      width: 100%;
    }
  }
  </style>
  