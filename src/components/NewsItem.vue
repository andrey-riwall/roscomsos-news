<template>
  <li class="news__item">
    <img :src=item.image_url alt="Изображение" class="news__img_item">
    <div class="news__text_item">
      <span class="news__date_item">
        {{ item.date }}
      </span>
      <h3 class="news__heading_item">
        <a :href=item.heading_url class="news__link_item" target="_blank">
          {{ item.heading }}
        </a>
      </h3>
      <p class="news__desc_item">
        {{ item.desc }}
      </p>
    </div>
  </li>
</template>

<style scoped lang='scss'>
  @import '../mixins/mixins';
  .news__item {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: vw(30);
  }

  .news__img_item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    grid-column: span;
  }

  .news__text_item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: vw(10);
    grid-column: span 4;
  }

  .news__date_item {
    width: auto;
    padding: vw(5) vw(10);
    background: #ecedee;
    color: #838c9b;
    font-size: vw(16);
  }

  .news__heading_item {
    color: #214180;
    font-size: vw(20);
  }

  .news__link_item {
    color: #214180;
    font-size: vw(20);
  }

  .news__desc_item {
    font-size: vw(16);
  }

  @include m {
    .news__text_item {
      gap: vw(20);
    }

    .news__date_item {
      padding: vw(10) vw(20);
      font-size: vw(38);
    }

    .news__heading_item {
      font-size: vw(40);
    }

    .news__link_item {
      font-size: vw(40);
    }

    .news__desc_item {
      font-size: vw(36);
    }
  }
</style>

<script>
  export default {
    props: [ 'item' ],
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
