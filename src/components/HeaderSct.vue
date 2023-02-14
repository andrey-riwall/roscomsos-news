<template>
  <header id="header" class="header">
    <div class="container header__container">

      <a href="#" class="header__logo">
        <h1 class="header__logo_big">
          НОВОСТИ <span>РОСКОСМОСА</span>
        </h1>
        <span class="header__logo_small">
          и его предприятий
        </span>
      </a>

      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <a href="#footer" class="header__link">
              в конец
            </a>
          </li>
        </ul>
      </nav>

      <!-- <form action="#" class="header__form">
        <input type="text" class="header__search" placeholder="Поиск">  ДОЛБАЕБ ТУТ СДЕЛАЙ ЗАЕБАЛ
      </form> -->

    </div>
  </header>
</template>

<style scoped lang='scss'>
  @import '../mixins/mixins';

  .header {
    height: vw(100);
    background: #fff;
    box-shadow: 0 0 vw(20) 0 rgba(#000000, .1);
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
  }

  .header__logo_big {
    font-weight: 700;
    font-size: vw(28);
    line-height: 100%;
    color: #707173;
    letter-spacing: vw(1);
  }

  .header__logo_big span {
    color: #E20036;
  }

  .header__logo_small {
    display: block;

    font-size: vw(16);
    line-height: 100%;
    color: #707173;
    letter-spacing: vw(1);

    margin-top: vw(-3);
  }

  .header__list {
    display: flex;
    align-items: center;
    gap: vw(20);
  }

  .header__item {
    font-weight: 500;
    font-size: vw(24);
  }

  @include m {
    .header {
      height: vw(250);
      box-shadow: 0 0 vw(100) 0 rgba(#000000, .1);
    }

    .header__logo_big {
      font-size: vw(62);
      letter-spacing: vw(1);
    }

    .header__logo_small {
      font-size: vw(46);
      letter-spacing: vw(1);

      margin-top: vw(-6);
    }

    .header__item {
      font-size: vw(56);
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
