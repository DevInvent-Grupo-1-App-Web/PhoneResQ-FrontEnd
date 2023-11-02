<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-12">
          <img src="@/assets/successfullypasswordchanged.jpg" alt="Woman holding a clipboard">
        </div>
        <div class="col-md-4 col-12">
          <h1>Su contraseña ha sido restablecida</h1>
          <p>Ahora puede iniciar sesión con su nueva contraseña.</p>
          <a href="/login" class="btn btn-primary">Iniciar sesión</a>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgba(36, 51, 71, 0.80);
  
  }
  
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .col-md-8 {
    width: 50%;
    height: auto;
  }
  
  .col-md-4 {
    width: 20%;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  button {
    width: 100%;
    height: 40px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  </style>
  