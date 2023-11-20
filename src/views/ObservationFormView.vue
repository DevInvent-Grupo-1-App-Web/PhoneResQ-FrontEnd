  <template>
      <div class="container">
        <h1>Observación</h1>
        <form class="observationform" @submit.prevent="generarObservacion">
          <div class="form-group">
            <label for="dueño">Dueño</label>
            <input type="text" class="form-control" id="dueño" placeholder="Ingrese el nombre del dueño">
          </div>
          <div class="form-group">
            <label for="asunto">Asunto</label>
            <input type="text" class="form-control" id="asunto" placeholder="Ingrese el asunto">
          </div>
          <div class="form-group">
            <label for="detalles">Detalles</label>
            <textarea class="form-control" id="detalles" rows="5" placeholder="Ingrese los detalles"></textarea>
          </div>
          <div class="form-group">
            <label for="costoAdicional">Costo Adicional</label>
            <input type="number" class="form-control" id="costoAdicional" placeholder="Ingrese el costo adicional">
          </div>
              <button type="submit" class="btn-primary">Generar</button>
        </form>
        <button class="btn-secondary" @click="cancelarObservacion">Cancelar Observación</button>
      </div>     
  

    </template>
    
    <script>
    export default {
  name: "FormObservacion",
  data() {
    return {
      dueño: "",
      asunto: "",
      detalles: "",
      costoAdicional: 0,
    };
  },
  methods: {
    generarObservacion() {
      // Aquí puedes realizar la lógica para generar la observación
      // Puedes mostrar una alerta con el mensaje "Observación generada"
      alert("Observación generada");

      // Puedes volver a la pestaña anterior usando window.history
      window.history.back();
    },
    cancelarObservacion() {

      window.history.back();
    },
  },
};
    </script>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Jost&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Jost&family=Mulish:wght@200&family=Nunito+Sans:opsz,wght@6..12,500&family=Poppins&display=swap');
    .container {
      margin: 50px;
      font-family: 'Nunito Sans', sans-serif;
      text-align: left;
      color: #2c3e50;
      flex-shrink: 0;
      fill: #FFF;
      width: 70%;
      filter: drop-shadow(0px 69px 42px rgba(200, 200, 200, 0.25));
      background: var(--True-White, #FFF);
    }
    .btn-secondary {
    margin-top: -10%;
    margin-bottom: 5%;
    margin-left: 2%;
    display: inline-flex;
    color: #243347;
    width: 21%;
    text-align: center;
    padding: 16px 40px;
    border-radius: 8px;
    background: #ccc;
    cursor: pointer;
  }
    .observationform{
      width: 70%;
      height: 70%;
      flex-shrink: 0;
      fill: #FFF;
      filter: drop-shadow(0px 69px 42px rgba(200, 200, 200, 0.25));
    }
    h1 {
      text-align: left;
      font-family: "Nunito Sans", sans-serif;
      font-size: 96px;
      font-style: normal;
      font-weight: 700;
      width: 130%;
      line-height: 93.75%;
      background: linear-gradient(180deg, #243347 0%, rgba(36, 51, 71, 0.00) 164.44%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    form {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: left;
      height: 100%;
      flex-shrink: 0;
      

    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      margin: 20px;
      flex-shrink: 0;
    }
    
    label {
      font-weight: bold;
      margin-right: 20px;
      width: 100%;
      flex-shrink: 0;
    }
    .form-control{

      width: 100%;
      height: 120%;
      flex-shrink: 0;
  }
  div.container{
      margin: 10%;
  }
    input,
    textarea {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding: 10px; 
      border: 1px solid #ccc;
      border-radius: 10px;
      flex-shrink: 0;
      color: #403F3F;
      font-family: 'Mulish', sans-serif;
      height: 100%;
      flex-shrink: 0;
    }
    
    .btn-primary {
      margin-right: 50px;
      margin-left: 20px;
      margin-bottom: 31px;
      display: inline-flex;
      color: #ccc;
      padding: 16px 80px;
      gap: 10px;
      width: 30%;
      border-radius: 8px;
      background: #243347;
  }
    
    @media (max-width: 500px) {
      .container {
        width: 100%;
      }
    }
    </style>
    