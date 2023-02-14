<template>
  <section id="news" class="news">
    <div class="container news__container">
      <h2 class="news__heading">Новости</h2>

      <ul class="news__list">
        <NewsItem v-for="item in news" :item="item" :key="news.indexOf(item)" />
      </ul>
    </div>
  </section>
</template>

<style scoped lang='scss'>
  @import '../mixins/mixins';
  .news {
    padding: vw(50) 0;
  }

  .news__heading {
    font-weight: normal;
    font-size: vw(26);
    margin-bottom: vw(30);
  }

  .news__list {
    display: flex;
    flex-direction: column;
    gap: vw(30);
  }

  @include m {
    .news {
      padding: vw(100) 0;
    }

    .news__heading {
      font-size: vw(70);
      margin-bottom: vw(70);
    }

    .news__list {
      gap: vw(60);
    }
  }
</style>

<script>
  import NewsItem from '@/components/NewsItem';
  import newsJson from '@/data/news.json';

  export default {
    components: { NewsItem },
    data: function() {
      return {
        news: newsJson.sort((a, b) => {
          return new Date(this.getDate(b.date)) - new Date(this.getDate(a.date));
        }),
      }
    },
    methods: {
      getDate: function(dateStr) {
        let date = dateStr.split('.');
        return `${date[2]}-${date[1]}-${date[0]}`;
      }
    },
    computed: {
    },
  }
</script>
