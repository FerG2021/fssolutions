<template>
  <div class="container">
    <div class="container-title">
      <div class="title">
        <span class="main-title"> FS SOLUTIONS <br /> </span>
        <!-- <span class="description-title">
          ¡Muy pronto vamos a celebrar el lanzamiento de nuestro sitio!
        </span> -->
      </div>
    </div>

    <div class="carousel-clients card">
      <ClientsCarousel></ClientsCarousel>
    </div>

    <div class="container-icons">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import ClientsCarousel from './components/ClientsCarousel.vue';

export default {
  data() {
    return {
    };
  },

  methods: {
    getSeverity(status) {
      switch (status) {
        case "INSTOCK":
          return "success";

        case "LOWSTOCK":
          return "warning";

        case "OUTOFSTOCK":
          return "danger";

        default:
          return null;
      }
    },
  },

  components: { Footer, ClientsCarousel },
};
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
      height: 40%;
      display: flex;
      margin: auto;
      align-items: center;
      text-align: center;
      .main-title {
        background: rgb(230, 0, 204);
        background: linear-gradient(
          121deg,
          rgba(230, 0, 204, 1) 0%,
          rgba(9, 116, 121, 1) 67%,
          rgba(0, 150, 255, 1) 100%
        );
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

    .carousel-clients {
      height: 60%;
      width: 50%;
      display: flex;
      align-items: center;
    }

    .container-icons {
      height: 60%;
      display: flex;
      margin: auto;
      align-items: center;
    }
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .container {
    height: 100vh !important;
    width: 100% !important;
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
        background: rgb(230, 0, 204);
        background: linear-gradient(
          121deg,
          rgba(230, 0, 204, 1) 0%,
          rgba(9, 116, 121, 1) 67%,
          rgba(0, 150, 255, 1) 100%
        );
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

    .carousel-clients {
      height: 60%;
      width: 100%;
      display: flex;
      align-items: center;
    }

    .container-icons {
      height: 70%;
      display: flex;
      margin: auto;
      align-items: center;
    }
  }

  
}
</style>
