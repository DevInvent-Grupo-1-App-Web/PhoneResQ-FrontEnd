<template>
    
    <div id="servicecard">
        <div class="service-card">
      <div class="service-card-header">
        <p class="service-card-title">Servicio Técnico</p>
      </div>
      <div class="service-card-body">
        <div class="service-card-details">
          <p class="service-card-detail">Nombre Servicio Técnico</p>
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
        margin-top: 80px;
        justify-content: center;
        height: 85%;
        width: 100%;
        background: var(--Purple-White, #F6F6FE);
    }
    .service-card-body{
        max-height: 100%;
        display: flex;
    }
  .service-card {
    width: 200%;
    max-height: fit-content;
    height: 100%;
    margin: 0 auto;
    border-radius: 0.5rem;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    background: var(--Purple-White, #F6F6FE);
  }
  
  .service-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 150%;
    align-content: center;
  }
  
  .service-card-title {
    font-weight: bold;
    text-align: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 93.75%;
    background: linear-gradient(180deg, #243347 0%, rgba(36, 51, 71, 0.00) 164.44%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .service-card-body {
    padding: 1rem;
    display: flex;
    width: 100%;
    height: 200%;
    align-items: flex-start;
    gap: 34px;
    flex-shrink: 0;
  }
  
  .service-card-details {
    margin-bottom: 1rem;
    height: 100%;
    width: 100%;
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
    font-weight: 400;
    line-height: normal;
  }
  
  .service-card-actions {
    padding: 10px;
    
  }
  
  .button {
    margin-right: 1rem;
    border-radius: 8px;
    background: #243347;
  }
  
  @media (max-width: 500px) {
    .service-card {
      width: 100%;
    }
  }
  </style>
  