import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsSct from '@/components/NewsSct.vue';
import MapPage from '@/components/MapPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'news', component: NewsSct, path: '/' },
  { name: 'map', component: MapPage, path: '/map' },
];

const router = new VueRouter({
  routes,
});

export default router;
