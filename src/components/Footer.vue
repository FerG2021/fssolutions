<template>
  <Button
    icon="pi pi-facebook"
    text
    rounded
    aria-label="Filter"
    class="icon"
    size="large"
    @click="goToFacebook()"
  />
  <Button
    icon="pi pi-instagram"
    text
    rounded
    aria-label="Filter"
    class="icon"
    size="large"
    @click="goToInstagram()"
  />
  <Button
    icon="pi pi-whatsapp"
    text
    rounded
    aria-label="Filter"
    class="icon"
    size="large"
    @click="abrirWhatsApp()"
  />
</template>

<script>
export default {
  data() {
    return {
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
    };
  },

  methods: {
    goToFacebook() {
      window.open(this.facebook, "_blank");
    },
    goToInstagram() {
      window.open(this.instagram, "_blank");
    },
    goToTwitter() {
      window.open(this.twitter, "_blank");
    },
    async abrirWhatsApp() {
      let mensaje = `¡Hola FSSolutions!"`;

      mensaje = mensaje + "\n";

      mensaje =
        mensaje +
        " Te envío este mensaje porque estoy interesado adquirir sus productos ";

      mensaje = mensaje + "\n";

      mensaje = mensaje + "¡¡¡Saludos!!!";

      let url = encodeURI("https://wa.me/" + 5493843401553 + "?text=" + mensaje);

      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.icon {
  margin: 0px 20px 0px 20px;
  font-size: 60px !important;
  color: rgb(230, 0, 204);
  color: linear-gradient(
    121deg,
    rgba(230, 0, 204, 1) 0%,
    rgba(9, 116, 121, 1) 67%,
    rgba(0, 150, 255, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>