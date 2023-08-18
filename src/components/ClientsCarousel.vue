<template>
  <div class="carousel">
    <p class="clients-legend">Nuestros clientes</p>
    <Carousel
      :value="products"
      :numVisible="1"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="4000"
    >
      <template #item="slotProps">
        <div
          class="border-1 surface-border border-round m-2 text-center py-5 px-3"
        >
          <div class="mb-3 img-container">
            <img
              :src="
                slotProps.data.image
              "
              class="w-6 shadow-2 img"
              @click="gotoWeb(slotProps.data.url)"
            />
          </div>
        </div>
      </template>
    </Carousel>

    
  </div>
</template>

<script>
import modular from '../assets/modular.png';
import laladecokids from '../assets/laladecokids.png';
import nutrimargbalanceados from '../assets/nutrimargbalanceados.png';
import restaurantapp from '../assets/restaurantapp.png';
export default {
  data() {
    return {
      products: [
        {
          id: "1",
          name: "ModulAr",
          image: modular,
          url: "http://modular.balanceado.com.ar",
        },
        {
          id: "2",
          name: "LalaDecoKids",
          image: laladecokids,
          url: "http://lalakids.balanceado.com.ar",
        },
        {
          id: "3",
          name: "NutrimargBalanceados",
          image: nutrimargbalanceados,
          url: "https://drive.google.com/drive/u/1/folders/1mUGpxs3pgCEFkCx3IOqIcvg93ze2SrwO",
        },
        {
          id: "3",
          name: "restaurantapp",
          image: restaurantapp,
          url: "http://landingcarta.balanceado.com.ar",
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1199px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "991px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "767px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    }
  },

  methods: {
    gotoWeb(url) {
      window.open(url, "_blank");
    }
  },
};
</script>

<style scoped lang="scss">
/*  */
/* WEB */
/*  */
@media all and (min-width: 961px) {
  .carousel {
    height: 36vh;

    width: 100%;
    .clients-legend {
      color: #fff;
      text-align: center;
      padding: 10px;
    }
    .img-container {
      display: flex;
      height: 28vh;
      .img {
        margin: auto;
        object-fit: contain;
        width: 100%;
        height: 28vh;
      }
      .img:hover { 
        cursor: pointer;
      }
    }
  }
}

/*  */
/* MOBILE */
/*  */
@media all and (max-width: 960px) {
  .carousel {
    width: 100%;
    .clients-legend {
      color: #fff;
      text-align: center;
      padding: 10px;
    }
    .img-container {
      display: flex;
      .img {
        margin: auto;
        object-fit: contain;
        width: 100%;
        height: 12vh;
      }
    }
  }
}
</style>