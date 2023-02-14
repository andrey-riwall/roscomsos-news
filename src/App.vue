<template>
  <div id="app">
    <HeaderSct/>
    <main>
      <NewsSct/>
    </main>
    <FooterSct name="footer"/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import './mixins/mixins';

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: "Montserrat", sans-serif;
    color: #707173;
    line-height: 100%;
    text-decoration: none;
    list-style: none;
    scroll-behavior: smooth;
  }

  button, input {
    border: none;
    background: none;
    outline: none;
  }

  body {
    position: relative;
    min-height: 100vh;
    padding-bottom: vw(100);
  }

  .container {
    max-width: vw(1470);
    padding: 0 vw(15);
    margin: 0 auto;

    @include m {
      max-width: vw(1700);
      padding: 0 vw(30);
    }
  }
</style>

<script>
import HeaderSct from '@/components/HeaderSct.vue';
import FooterSct from '@/components/FooterSct.vue';
import NewsSct from '@/components/NewsSct.vue';

export default {
  components: { HeaderSct, FooterSct, NewsSct },
  data: function () {
    return {

    }
  },
  methods: {
  },
}
</script>
