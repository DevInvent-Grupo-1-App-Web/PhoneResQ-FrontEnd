<template>
    <div class="container">
        <h1>Dashboard</h1>
        <div class="appointments-view">
            <div class="appointment-card">
                <img src="https://picsum.photos/200">
                <div class="appointment-info">
                    <h2>Appointment Name</h2>
                    <p>Appointment Date</p>
                    <p>Appointment Time</p>
                    <p>Appointment Location</p>
                </div>
                <div class="view-more">
                    <button type="button">Más información</button>
                </div>
            </div>
        </div>
        <div class="inventory-view">
            <div class="inventory-item">
                <img src="https://picsum.photos/200">
                <div class="item-caption">
                    <h4>Item</h4>
                    <p>Stock available</p>
                </div>
                <div class="view-more">
                    <button type="button">Ver más</button>
                </div>
            </div>
        </div>
        <div class="tracking-view">
            
        </div>
    </div>
    
</template>

<style scoped>
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

  </style>

<script>
    export default {
        name: 'DashboardView',
        data() {

        }
    }
</script>