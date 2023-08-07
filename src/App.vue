<template>
  <div class="container">
    <div class="container-title">
      <div class="title">
        <span class="main-title">
          FS SOLUTIONS <br>
        </span>
        <span class="description-title">
          ¡Muy pronto vamos a celebrar el lanzamiento de nuestro sitio!
        </span>
      </div>
      <div class="description">
        
      </div>
    </div>

    <div class="container-icons">
      <Button icon="pi pi-facebook" text rounded aria-label="Filter" class="icon" size="large" @click="goToFacebook()"/>
      <Button icon="pi pi-instagram" text rounded aria-label="Filter" class="icon" size="large" @click="goToInstagram()"/>
      <Button icon="pi pi-twitter" text rounded aria-label="Filter" class="icon" size="large" @click="goToTwitter()"/>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        facebook: 'https://www.facebook.com',
        instagram: 'https://www.instagram.com',
        twitter: 'https://www.twitter.com',
      }
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
      }
    },
  }
</script>

<style scoped lang="scss">
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    background-color: #191919;
    .container-title {
      height: 85%;
      display: flex;
      margin: auto;
      align-items: center;
      text-align: center;
      .main-title {
        background: rgb(230,0,204);
        background: linear-gradient(121deg, rgba(230,0,204,1) 0%, rgba(9,116,121,1) 67%, rgba(0,150,255,1) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 600;
        font-size: 6rem;
      }
      .description-title {
        font-size: 2rem;
        color: #fff;
      }
    }

    .container-icons {
      height: 15%;
      display: flex;
      margin: auto;
      align-items: center;
      .icon {
        margin: 0px 20px 0px 20px;
        color: #fff;
        font-size: 60px !important;
      }
    }
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    background-color: #191919;
    .container-title {
      height: 70%;
      display: flex;
      margin: auto;
      align-items: center;
      text-align: center;
      .main-title {
        background: rgb(230,0,204);
        background: linear-gradient(121deg, rgba(230,0,204,1) 0%, rgba(9,116,121,1) 67%, rgba(0,150,255,1) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 600;
        font-size: 4rem;
      }
      .description-title {
        font-size: 1.5rem;
        color: #fff;
      }
    }

    .container-icons {
      height: 30%;
      display: flex;
      margin: auto;
      align-items: center;
      .icon {
        margin: 0px 20px 0px 20px;
        color: #fff;
        font-size: 60px !important;
      }
    }
  }
}

</style>
