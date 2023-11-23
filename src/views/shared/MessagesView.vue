<script setup>
  import MessageCard from "./../../components/MessageCard.component.vue"
</script>

<template>
  <div class="container">
    <div class="view-header layout-vertical">
      <h1 class="title">Mensajes</h1>
    </div>
    <div class="messages-container">
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </div>
  </div>
</template>

<script>
export default {
  name: "MessagesView",
  components: {
    MessageCard,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost&family=Nunito+Sans:opsz,wght@6..12,500&display=swap");

.container {
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-weight: bold;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 65px;
  font-style: normal;
  font-weight: 700;
  line-height: 82%;
  background: linear-gradient(180deg, #243347 0%, rgba(36, 51, 71, 0) 164.44%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0;
}

.messages-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  & > * {
    margin: 0.5rem 0;
  }
}
</style>
