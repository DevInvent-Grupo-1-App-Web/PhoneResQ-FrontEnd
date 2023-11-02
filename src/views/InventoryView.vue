<template>
    <div class="container">
      <h1>Inventario</h1>
      <button class="btn btn-success" @click="addItem">Agregar</button>&nbsp;
      <div class="search-bar2">
        <label for="search">Buscar:</label>
        <input type="text" id="search" v-model="searchQuery">
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredItems" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button class="btn btn-primary" @click="editItem(item)">Editar</button>
              <button class="btn btn-danger" @click="deleteItem(item)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="filteredItems.length === 0">
        <p>Artículo no encontrado.</p>
      </div>
      <div v-if="showEditForm">
        <h2>Editar elemento</h2>
        <div class="form">
          <form @submit.prevent="updateItem">
            <div class="form-group">
              <label for="name">Nombre:</label>
              <input type="text" class="form-control" id="name" v-model="editedItem.name">
            </div>
            <div class="form-group">
              <label for="category">Categoría:</label>
              <input type="text" class="form-control" id="category" v-model="editedItem.category">
            </div>
            <div class="form-group">
              <label for="price">Precio:</label>
              <input type="number" class="form-control" id="price" v-model="editedItem.price">
            </div>
            <br>
            <button type="submit" class="btn btn-primary">Guardar</button>
            <button class="btn btn-secondary" @click="cancelEdit">Cancelar</button>
          </form>
          <br>
          <br>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "InventoryView",
    data() {
      return {
        items: [
          {
            id: 1,
            name: "Batería de Repuesto",
            category: "Accesorios",
            price: 96.07,
          },
          {
            id: 2,
            name: "Pantalla LCD",
            category: "Pantallas",
            price: 192.14,
          },
          {
            id: 3,
            name: "Conjunto de Herramientas de Reparación",
            category: "Herramientas",
            price: 76.86,
          },
        ],
        showEditForm: false,
        editedItem: {
          id: null,
          name: "",
          category: "",
          price: null,
        },
        searchQuery: "", // Propiedad para la búsqueda
      };
    },
    computed: {
  filteredItems() {
    const query = this.searchQuery.toLowerCase();
    return this.items.filter((item) => {
      const name = item.name.toLowerCase();
      const category = item.category.toLowerCase();
      const price = item.price ? item.price.toString() : ''; // Verificar si el precio es null
      return (
        name.includes(query) ||
        category.includes(query) ||
        price.includes(query)
      );
    });
  },
},
    methods: {
      editItem(item) {
        this.showEditForm = true;
        this.editedItem = { ...item };
      },
      cancelEdit() {
        this.showEditForm = false;
        this.editedItem = {
          id: null,
          name: "",
          category: "",
          price: null,
        };
      },
      updateItem() {
        const index = this.items.findIndex((item) => item.id === this.editedItem.id);
        if (index !== -1) {
          this.items.splice(index, 1, this.editedItem);
          this.showEditForm = false;
          this.editedItem = {
            id: null,
            name: "",
            category: "",
            price: null,
          };
        }
      },
      deleteItem(item) {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index !== -1) {
          this.items.splice(index, 1);
        }
      },
      addItem() {
        console.log("addItem function called");
        const newItem = {
          id: this.getNextItemId(),
          name: "",
          category: "",
          price: null,
        };
        this.items.push(newItem);
        this.showEditForm = true; // Establece showEditForm en true
        this.editedItem = newItem; 
      },
  
      getNextItemId() {
        return Math.max(...this.items.map((item) => item.id), 0) + 1;
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jost&family=Nunito+Sans:opsz,wght@6..12,500&display=swap');
  .search-bar2 {
  display: flex;
  align-items: center;
  color: var(--grey-400, #7C8DB0);
/* Body Default */
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
input.form-control {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none; /* Quita el borde de enfoque */
  transition: border-color 0.3s; /* Agrega una transición suave */
  color: #000000;
}
label {
  margin-right: 10px; /* Espacio entre el label y el input */
  color: var(--grey-400, #000000);

/* Body Large */
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

input[type="text"] {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none; /* Quita el borde de enfoque */
  transition: border-color 0.3s; /* Agrega una transición suave */
  color: #000000;
}

input[type="text"]:focus {
  border-color: #000000; /* Cambia el color del borde cuando el input está enfocado */
}

  .container {
    max-width: 960px;
    margin: 0 auto;
    background-image: url("/vector-world-map-v2.2-blank.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  h1{
    text-align: center;
    margin-top: -4%;
  }
  
  table {
    margin-top: 5%;
    width: 100%;
    align-items: center;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.50);
    background: var(--Purple-White, #F6F6FE);
  }
  
  th,
  td {
    padding: 5px;
    margin-right: 2%;
    text-align: center;
  }
  
  .btn-primary,
  .btn-danger, .btn-secondary {
    display: inline-block;
    width: auto;
    height: auto;
    padding: 8px 12px;
    margin-right: 10px;
    border-radius: 7px;
    background: #243347;
    color: aliceblue;
  }
  
  .btn.btn-success {
    display: flex;
    height: 100%;
    align-items: center;
    border-radius: 4px;
    background: #243347;
    color: var(--grey-100, #FAFAFA);
  
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  
  .image {
    width: 100%;
    height: 200px;
  }
  </style>
  