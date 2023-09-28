<template>
    <div class="container">
      <h1>Reclamo</h1>
      <form class="claimform">
        <div class="form-group">
          <label for="dueño">Número de Servicio</label>
          <input type="text" class="form-control" id="NumeroDeServicio" placeholder="Ingrese el número de servicio">
        </div>
        <div class="form-group">
          <label for="asunto">Asunto</label>
          <input type="text" class="form-control" id="asunto" placeholder="Ingrese el asunto">
        </div>
        <div class="form-group">
          <label for="detalles">Detalles</label>
          <textarea class="form-control" id="detalles" rows="5" placeholder="Ingrese los detalles"></textarea>
        </div>
            <button type="submit" class="btn-primary">Enviar</button>
      </form>
    </div>     
 

  </template>
  
  <script>
  export default {
    name: "FormClaim",
    data() {
      return {
        NumeroDeServicio: "",
        asunto: "",
        detalles: "",
      };
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
  .claimform{
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
  