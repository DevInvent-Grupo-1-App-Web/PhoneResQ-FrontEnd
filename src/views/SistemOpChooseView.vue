<template>
    <div class="frame">
      <h1 class="titlename">¿Qué sistema operativo usas?</h1>
      <div class="options">
        <a href="/androidbrandsoptions">
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

.titlename {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 6vw;
}
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
}

.options a {
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  padding: 30px;
}

.options a img {
  width: 100%;
  height: 100%;
  filter: brightness(1.1);
  mix-blend-mode: multiply;
}

.options a:hover {
  background-color: #ccc;
}


</style>
