import Vue from 'vue';
import VueRouter from 'vue-router';
import LotterySimulator from '../views/lotterySimulator/LotterySimulator.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LotterySimulator',
    component: LotterySimulator,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
