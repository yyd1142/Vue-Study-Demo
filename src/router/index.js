import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import News from '@/pages/News';
import Find from '@/pages/Find';
import My from '@/pages/My';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
});
