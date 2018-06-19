import Vue from 'vue';
import Router from 'vue-router';
import MenuList from '@/components/MenuList';
import {Routers} from '@/router/router';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'MenuList',
      component: MenuList
    },
    ...Routers
  ]
});
