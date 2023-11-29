<template>
    <div class="tracking-frame">
        <h1 class="title">Tracking</h1>
        <h3>Controla el progreso de las reparaciones aquí</h3>
        <div class="order-info">
            <p>Orden: 31654</p>
            <p>Nombre: Cindrella</p>
            <p>Modelo: Iphone 14 Pro</p>
            <p>Costo: S/. 100</p>
            <p>Problema: Pantalla rota</p>
            <button class="observation-button" v-if="processFinished==false"  @click="goToObservation" >Observación</button>
        </div>
        <div class="timeline">
            <div class="timeline-step" :class="{'active': step === 1}">Recibido</div>
            <div class="timeline-step" :class="{'active': step === 2}">Inspección</div>
            <div class="timeline-step" :class="{'active': step === 3}">En reparación</div>
            <div class="timeline-step" :class="{'active': step === 4}">Listo para recoger</div>
        </div>
        <div v-if="processFinished==false" class="buttons">
            <button class="button" @click="stepNext" :disabled="step === 4 && !processFinished">Siguiente</button>&nbsp;
            <button class="button" :disabled="step !== 4 || processFinished" @click="finishProcess">Terminar</button>
        </div>
        <div v-if="showAlert" class="alert">
            <h2>Proceso finalizado</h2>
            <button class="button" @click="alertUser">Alertar al usuario</button>&nbsp;
            <button class="button" @click="cancelProcess">Cancelar</button>
        </div>
        <div v-if="processFinished" class="alert">
            <h2>Proceso Terminado satisfactoriamente</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step: 1,
            showAlert: false,
            processFinished: false

        };
    },
    mounted() {
        this.step = this.$route.query.step || 1;
    },
    methods: {
        stepNext() {
            this.step++;
        },
        finishProcess() {
            this.showAlert = true;
        },
        alertUser() {
            alert("El usuario ha sido alertado");
            this.showAlert=false;
            this.processFinished = true; // Marcar el proceso como finalizado

        },
        cancelProcess() {
            this.showAlert = false;
            this.step--;
            
        },
        goToObservation() {
            this.$router.push('/registrar-observacion');
        }
    }
};
</script>

<style scoped>
.tracking-frame {
    width: 80%;
    height: 80%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
}

.title {
    font-size: 96px;
    text-align: center;
    font-weight: bold;
    margin-top: -2%;
    margin-bottom: -2%;

}


.order-info {
    margin-bottom: 10%;
    text-align: left;
    margin-right: -10%;    
}
.order-info, p{
    padding: 1%;
    font-size: 20px;
    width: 100%;
}
.observation-button {
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 7px;
    background: #243347;
}

.timeline {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: -7%;
}

.timeline-step {
    width: 100%;
    height: 100%;
    background-color: #ccc;
    text-align: center;
    font-size: 16px;
    margin-left: 3%;
    margin-right: 3%;
    font-weight: bold;
    color: #000;
}

.timeline-step.active {
    background-color: #000;
    color: #fff;
}

.buttons {
    margin-top: 8%;
}

.button {
    width: 100px;
    height: 40px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 7px;
    background: #243347;

}

.alert {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.alert h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}
</style>