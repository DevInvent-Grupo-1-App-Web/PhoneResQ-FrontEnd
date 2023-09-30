<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
  <div class="technician_section">
      <div class="technician_pic">
        <img src="https://www.shutterstock.com/shutterstock/photos/2125280033/display_1500/stock-photo-a-technician-fixing-a-printer-2125280033.jpg" width="400" height="400">
      </div>
      <div class="technician_info">
            <p style="margin-left: 55px; font-size: 40px">John Doe</p>
            <p style="margin-left: 55px; height: 144px;width: 300px; word-wrap: break-word;">Mobile Technician, has a Mobile Repairment degree in SENATI. Has 4 years of experience repairing phones</p>
      </div>
      <div class="star-rating">
        <input type="radio" name="rate" id="rate-5">
          <label for="rate-5" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-4">
          <label for="rate-4" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-3">
          <label for="rate-3" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-2">
          <label for="rate-2" class="fas fa-star"></label>
          <input type="radio" name="rate" id="rate-1">
          <label for="rate-1" class="fas fa-star"></label>
          <br><br><br>
          <form action="#">
              <header> Let us know what you think</header>
          </form>
          <div class="textarea">
              <textarea cols="50" placeholder="Describe your experience..."></textarea>
          </div>
          <div class="btn">
              <button type="s">Send</button>
          </div>
      </div>
      
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');


.technician_section {
    font-family: 'Open Sans', sans-serif;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 5px;
    margin-top: 60px;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    background-color: #E4E4E4;

}

.technician_info{

}

.technician_pic{
    max-width: 100%;
    max-height: 100%;
}

.star-rating input{
    display: none;

}

.star-rating label{
    font-size: 40px;
    color: #444;
    padding: 10px;
    float: right;
    transition: all 0.2s ease;
}

input:not(:checked) ~ label:hover,
input:not(:checked) ~ label:hover ~ label{
    color: #fd4;
}

input:checked ~ label{
    color: #fd4;
}

input#rate-5:checked ~ label{
    color: #fe7;
    text-shadow: 0 0 20px #952
}

form header{
    width: 100%;
    font-size: 25px;
    color: black;
    font-weight: 500;
    margin: 5px 0 20px 0;
    text-align: center;
    transition: all 0.2s ease;
}


.textarea{
    height: 100px;
    width: 100%;
    overflow: hidden;
}

textarea{
    height: 100%;
    width: 100%;
    outline: none;
    color: #1b1b1b;
    border: 1px solid #333;
    padding: 10px;
    font-size: 17px;
    resize: none;
}

.btn{
    height: 45px;
    width: 100%;
    margin: 15px 0;
}

.btn button{
    color: white;
    height: 100%;
    width: 100%;
    border: 1px solid #444;
    outline: none;
    background: darkgray;
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn button:hover{
    background: #1b1b1b
}

.star-rating{
    margin-left: 50px;
}

</style>
<script setup>
</script>