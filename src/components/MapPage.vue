<template>
  <section class="map">
    <div class="container map__container">
      <iframe class="map__map" src="https://www.arcgis.com/apps/instant/sidebar/index.html?appid=89d67d1e20194097a5b1335284f1b376" frameborder="0" style="border:0" allowfullscreen>Эта страница не поддерживает iframе.</iframe>
    </div>
  </section>
</template>

<style scoped lang='scss'>
  @import "../mixins/mixins";

  .map {
    height: calc(100vh - vw(200));
  }
  .map__map {
    width: 100%;
    height: calc(100vh - vw(200));
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
    methods: {

    },
    computed: {

    },
  }
</script>
