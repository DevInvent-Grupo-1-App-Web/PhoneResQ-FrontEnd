<template>
  <div class="card layout-horizontal">
    <div class="image-box">
      <img
        class="user-profile-picture"
        :src="userProfilePicture"
        alt="imagen de contacto"
      />
    </div>
    <div class="text-container layout-vertical">
      <p class="contact-name">
        {{contactName}}
      </p>
      <p class="message-preview">
        {{lastMessage}}
      </p>
    </div>
    <div class="notification-badge">
      <slot name="notification-badge">{{notificationBadge}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageCard",
  props: {
    userProfilePicture: {
        type: String,
        default: "https://picsum.photos/200/300",
    },
    contactName: {
      type: String,
      default: "Nombre de contacto",
    },
    lastMessage: {
      type: String,
      default: "Contenido del mensaje",
    },
    notificationBadge: {
      type: Number,
      default: 1,
    },
  },
};

</script>

<style scoped>
.card {
  border: 1px solid #e2e8f0;
  width: 100%;
  height: 6rem;
  box-sizing: border-box;
    border-radius: 0.5rem;
}

.user-profile-picture {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 1rem;
}

.contact-name {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0;
}

.message-preview {
  font-size: 1.25rem;
  margin: 0;
}

.text-container {
  margin: 1rem;
}

.notification-badge {
    background-color: #f00;
  color: #fff;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 1rem;
  margin-top: 1rem;
}

@media screen and (max-width: 580px) {
    .text-container {
        display: flex;
        align-items: center;
        height: 100%;
    }
    
    .message-preview {
        display: none;
    }

    .contact-name {
        align-self: center;
        margin: 0;
    }
}

</style>
