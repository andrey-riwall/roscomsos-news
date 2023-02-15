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
            <router-link :to="{ name: 'news' }" class="header__link">
              главная
            </router-link>
          </li>
          <li class="header__item">
            <router-link :to="{ name: 'map' }" class="header__link">
              карта
            </router-link>
          </li>
        </ul>
      </nav>

      <form action="#" class="header__form" @submit.prevent="findText">
        <input ref="search" type="text" class="header__search" placeholder="Введите текст">
        <button class="header__btn">
          Поиск
        </button>
      </form>

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

  .header__form {
    display: flex;
    align-items: center;
    gap: vw(15);
  }

  .header__search {
    width: vw(300);
    padding: vw(15) vw(30);
    border-radius: vw(10);
    background: rgba(black, .07);
    font-size: vw(16);
  }

  .header__btn {
    padding: vw(10) vw(20);
    font-size: vw(16);
    cursor: pointer;
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
      height: vw(350);
      padding: vw(50) 0;
      box-shadow: 0 0 vw(100) 0 rgba(#000000, .1);
    }

    .container {
      flex-wrap: wrap;
    }

    .header__logo_big {
      font-size: vw(58);
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

    .header__form {
      gap: vw(30);
    }

    .header__search {
      width: vw(600);
      padding: vw(30) vw(60);
      border-radius: vw(20);
      font-size: vw(32);
    }

    .header__btn {
      padding: vw(10) vw(20);
      font-size: vw(32);
      cursor: pointer;
    }

    .header__list {
      display: flex;
      align-items: center;
      gap: vw(40);
    }

    .header__item {
      font-weight: 500;
      font-size: vw(48);
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
      findText: function() {
        find(this.$refs.search.value);
      }
    },
    computed: {

    },
  }
</script>
