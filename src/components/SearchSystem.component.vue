<template>
    <div id="app">
        <div class="containersearch">
      <header>
        <h1>PhoneResQ</h1>
        <p>Tenemos los mejores técnicos en reparación de teléfones celulares a tú disposición</p>
      </header>
      <main>
        <form action="/search" method="get">
          <input type="text" v-model="query" placeholder="Buscar">
          <select v-model="district">
            <option value="">Distrito</option>
            <option value="Lima">Lima</option>
            <option value="Callao">Callao</option>
            <option value="Arequipa">Arequipa</option>
            <option value="Cusco">Cusco</option>
          </select>
          <input type="date" v-model="date">
          <input type="submit" value="Buscar">
        </form>
        <ul v-if="results.length > 0">
          <li v-for="result in results" :key="result.id">
            <a :href="result.url">
              {{ result.title }}
            </a>
            <p>{{ result.description }}</p>
          </li>
        </ul>
        <p class="rmessage" v-if="results.length == 0">No se encontraron resultados</p>
        <p v-if="query">
          <a href="/search">Ver resultados recientes</a>
        </p>
      </main>
    </div>
    </div>
  
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: "",
        district: "",
        date: "",
        results: []
      };
    },
    methods: {
      search() {
        this.results = [];
        this.axios
          .get(`/api/search?query=${this.query}&district=${this.district}&date=${this.date}`)
          .then(response => {
            this.results = response.data;
          });
      }
    }
  };
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Jost&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Jost&family=Mulish:wght@200&family=Nunito+Sans:opsz,wght@6..12,500&family=Poppins&display=swap');

  #app{

    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    flex-shrink: 0;
  }


  .body-appsearch {
    font-family: sans-serif;
    align-items: center;
    display: flex;
  }
  
  .container {
    margin: 0 auto;
    max-width: 100%;
    display: flex;
  }
  
  header {
    background-color: #f9f9f9;
    padding: 10px ;
    color: #243347;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 100%;
    width: 120%;
  }
  
  h1 {
    text-align: center;
    margin-right: 18%;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: 93.75%;
    background: linear-gradient(180deg, #243347 0%, rgba(36, 51, 71, 0.00) 164.44%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;    
  }
  
  p {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 15px;
    margin-right: 17%;
  }
  
  main {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 8px 0px 334px 8px;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    flex-shrink: 0;
  }
    .rmessage{
    font-family: 'Nunito Sans', sans-serif;
    font-size: 20px;
    text-align: center;
    margin-left: 85px;
    }  
  form {
    display: flex;
    width: 100%;
    max-height: 100%;
    align-items: flex-start;
    border-radius: 4px;
    border: 1px solid var(--grey-200, #CBD4E6);
    background: #FFF;
/* elevation / medium */
    box-shadow: 0px 12px 24px 0 px rgba(27, 59, 119, 0.05), 0px 24px 60px 0px rgba(6, 47, 125, 0.05), 0px 2px 4px 0px rgba(7, 4, 146, 0.10);
  }
  
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    font-family: 'Mulish', sans-serif;
    border-radius: 10px;
    display: flex;
    border: 1px solid #ccc;
  }
  
  select {
    font-family: 'Mulish', sans-serif;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    border: 1px solid #ccc;
  }
  
    input[type="submit"] {
        background-color: #292929;
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        height: 100%;
        border-radius: 10px;
        width: 100%;
        padding: 12px 20px;
        align-items: center;
        gap: 8px;   
    }
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    text-decoration: none;
    color: #292929;
  }
  
  @media (max-width: 500px) {
    .containersearch {
      width: 100%;
      align-items: center;
    }
  }
  </style>
  