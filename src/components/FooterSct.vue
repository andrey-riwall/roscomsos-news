<template>
  <footer id="footer" class="footer">
    <div class="container footer__container">

      <a href="#" class="footer__logo">
        <h1 class="footer__logo_big">
          НОВОСТИ <span>РОСКОСМОСА</span>
        </h1>
        <span class="footer__logo_small">
          и его предприятий
        </span>
      </a>

      <nav class="footer__nav">
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#header" class="footer__link">
              в начало
            </a>
          </li>
        </ul>
      </nav>

    </div>
  </footer>
</template>

<style scoped lang='scss'>
@import '../mixins/mixins';

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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

.footer__logo_big {
  font-weight: 700;
  font-size: vw(28);
  line-height: 100%;
  color: #707173;
  letter-spacing: vw(1);
}

.footer__logo_big span {
  color: #E20036;
}

.footer__logo_small {
  display: block;

  font-size: vw(16);
  line-height: 100%;
  color: #707173;
  letter-spacing: vw(1);

  margin-top: vw(-3);
}

.footer__list {
  display: flex;
  align-items: center;
  gap: vw(20);
}

.footer__item {
  font-weight: 500;
  font-size: vw(24);
}

@include m {
  .footer {
    height: vw(250);
    box-shadow: 0 0 vw(100) 0 rgba(#000000, .1);
  }

  .footer__logo_big {
    font-size: vw(62);
    letter-spacing: vw(1);
  }

  .footer__logo_small {
    font-size: vw(46);
    letter-spacing: vw(1);

    margin-top: vw(-6);
  }

  .footer__item {
    font-size: vw(56);
  }
}
</style>

<script>
  export default {
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
