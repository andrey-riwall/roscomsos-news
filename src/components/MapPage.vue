<template>
  <section class="map">
    <div class="container map__container">
      <iframe class="map__map" src="https://www.arcgis.com/apps/instant/sidebar/index.html?appid=89d67d1e20194097a5b1335284f1b376" frameborder="0" style="border:0" allowfullscreen>Эта страница не поддерживает iframе.</iframe>
      <div class="map__preloader">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang='scss'>
  @import "../mixins/mixins";

  .map {
    position: relative;
    height: calc(100vh - vw(200));
  }
  .map__map {
    position: relative;
    z-index: 100;
    width: 100%;
    height: calc(100vh - vw(200));
  }

  .map__preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #333;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #333 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


  @include m {
    .map {
      height: calc(100vh - vw(700));
    }
    .map__map {
      height: calc(100vh - vw(700));
    }
  }
</style>

<script>
  export default {
    components: {  },
    data: function() {
      return {

      }
    },
  }
</script>
