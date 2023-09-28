<template>
    <div class="frame">
      <h1 class="titlename">¿Qué sistema operativo usas?</h1>
      <div class="options">
        <a href="AndroidOptionsView.vue">
          <img src= '/andoridbutton.png' alt="Android">
        </a>
        <a href="/iphonemodels">
          <img src="/iosbutton.png" alt="iOS">
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SOFrame',
  };
  </script>

<style scoped>
.frame {
  width: 100%;
  height: 100%;
  text-align: center;
  margin-top: -5%;
}

.options {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}

.options a {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  margin-left: 8.5%;
  margin-right: 16%;
}

.options a img {
  width: 300%;
  height: 300%;
}

.options a:hover {
  background-color: #ccc;
}


</style>
