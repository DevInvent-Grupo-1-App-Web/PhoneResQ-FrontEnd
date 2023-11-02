<template>
	<div class="container">
		<h1>Dashboard</h1>
		<div class="view-container">
			<div class="view appointments-view">
				<h3>Appointments</h3>
				<div class="appointment-cards-container">
					<div class="appointment-card">
						<div class="user-profile">
							<img src="https://picsum.photos/100">
						</div>
						<div class="appointment-info">
							<p>Juan Manuel Moya</p>
							<p>15/11/2023</p>
							<p>15:00</p>
							<p>Taller</p>
						</div>
						<div class="view-more">
							<button type="button" class="btn-primary" @click="goToTechServiceDetails">Más información</button>
						</div>
					</div>
					<div class="appointment-card">
						<div class="user-profile">
							<img src="https://picsum.photos/100">
						</div>
						<div class="appointment-info">
							<p>Laura Martinez</p>
							<p>04/11/2023</p>
							<p>10:00</p>
							<p>Taller</p>
						</div>
						<div class="view-more">
							<button type="button" class="btn-primary" @click="goToTechServiceDetails">Más información</button>
						</div>
					</div>
				</div>
			</div>
			<div class="view inventory-view">
				<h3>Inventory</h3>
				<div class="inventory-cards-container">
					<div class="inventory-item">
						<img src="https://picsum.photos/150">
						<div class="item-caption">
							<h3 class="inventory-item-name">Pantalla para Samsung Galaxy Tab S3</h3>
							<p>Stock: 20</p>
						</div>
						<div class="view-more">
							<button type="button" class="btn-primary" @click="goToInventory">Ver más</button>
						</div>
					</div>
					<div class="inventory-item">
						<img src="https://picsum.photos/150">
						<div class="item-caption">
							<h3>Pasta térmica</h3>
							<p>Stock: 15</p>
						</div>
						<div class="view-more">
							<button type="button" class="btn-primary" @click="goToInventory">Ver más</button>
						</div>
					</div>

				</div>
			</div>
			<div class="view tracking-view">
				<h3>Tracking</h3>
				<div class="tracking-card-container">
					<div class="tracking-card">
						<h4>Pedido #233443</h4>
						<p>Fecha límite: 26/11/2023</p>
						<div class="timeline-step">Recibido</div>
					</div>
					<div class="tracking-card">
						<h4>Pedido #275543</h4>
						<p>Fecha límite: 30/11/2023</p>
						<div class="timeline-step" @click.prevent="goToTracking">En proceso</div>
					</div>
					<div class="tracking-card">
						<h4>Pedido #2354753</h4>
						<p>Fecha límite: 10/12/2023</p>
						<div class="timeline-step">Listo</div>
					</div>
					<div class="tracking-card">
						<h4>Pedido #233443</h4>
						<p>Fecha límite: 26/11/2023</p>
						<div class="timeline-step">Recibido</div>
					</div>
					<div class="tracking-card">
						<h4>Pedido #275543</h4>
						<p>Fecha límite: 30/11/2023</p>
						<div class="timeline-step" @click.prevent="goToTracking">En proceso</div>
					</div>
					<div class="tracking-card">
						<h4>Pedido #2354753</h4>
						<p>Fecha límite: 10/12/2023</p>
						<div class="timeline-step">Listo</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	font-family: 'Nunito Sans', sans-serif;
	text-align: left;
	color: #2c3e50;
	fill: #FFF;
	padding: 0 15% 0 15%;
	filter: drop-shadow(0px 69px 42px rgba(200, 200, 200, 0.25));
	background: var(--True-White, #FFF);
	width: 100%;
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
	margin-bottom: 4%;
}

.view {
	border: 1px solid #E5E5E5;
	padding: 2rem;
}

.view-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: stretch;
	gap: 2rem;
	overflow-x: scroll;
}

.appointment-card {
	width: 100%;
	min-width: 32rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	column-gap: 2rem;
	padding: 1rem;
	background-color: #F6F6FE;
	border-radius: 16px;
}

.appointment-cards-container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.btn-primary {
	color: #ccc;
	padding: 14px;
	border: none;
	border-radius: 8px;
	background: #243347;
	cursor: pointer;
}

.inventory-view {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
}

.inventory-item {
	max-width: 10rem;
}

.inventory-cards-container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	column-gap: 2rem;
}

.inventory-item-name {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}

.timeline-step {
	margin-top: 5%;
	width: 90%;
	height: 100%;
	background-color: #ccc;
	text-align: center;
	font-size: 16px;
	margin-left: 3%;
	margin-right: 3%;
	font-weight: bold;
	color: #000;
	cursor: pointer;
}

.timeline-step.active {
	background-color: #000;
	color: #fff;
}

.tracking-card-container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	gap: 2rem;
	overflow-x: auto;
	min-width: 0;
}
.tracking-card, p {
	align-items: center;
	text-align: left;
	
}

.tracking-card {
	width: 100%;
	min-width: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	column-gap: 2rem;
	padding: 1rem;
	background-color: #F6F6FE;
	border-radius: 16px;
}
</style>

<script>
export default {
	name: 'DashboardView',
	data() {

	},
	methods: {
		goToTracking() {
			this.$router.push('/tracking/:id');
		},
		goToInventory() {
			this.$router.push('/inventory');
		},
		goToTechServiceDetails() {
			this.$router.push('/tech-service-details');
		}
	}
}
</script>