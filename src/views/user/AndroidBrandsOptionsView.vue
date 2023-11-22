<template>
    <div class="frame">
      <h1 class="titlename">¿Qué marca de teléfonos Android usas?</h1>
      <div class="options">
        <a href="/xiaomiphonelist">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/480px-Xiaomi_logo_%282021-%29.svg.png" alt="Xiaomi">
        </a>
        <a href="/samsungphoneslist">
          <img src="https://i.pinimg.com/474x/85/3c/fd/853cfde1e49ab9695125c89aba89acf9.jpg" alt="Samsung">
        </a>
        <a href="/motorolaphoneslist">
          <img src="https://static.vecteezy.com/system/resources/previews/020/927/144/original/motorola-brand-logo-phone-symbol-with-name-black-design-usa-mobile-illustration-free-vector.jpg" alt="Motorola">
        </a>
        <a href="/huaweiphoneslist">
          <img src="https://static.vecteezy.com/system/resources/previews/023/636/289/original/huawei-logo-transparent-free-png.png" alt="Huawei">
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AndroidPhoneFrame',
  };
  </script>
  
  <style scoped>
  
  .titlename {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 5vw;
    margin-bottom: 4%;
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
    filter: brightness(1.1);
    mix-blend-mode: multiply;
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: bottom;
  }
  
  .options a:hover {
    background-color: #ccc;
  }
  </style>
  