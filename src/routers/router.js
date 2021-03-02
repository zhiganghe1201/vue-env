import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
import { isDev } from '@utils';
import request from '@utils/request';
import SetTittle from '@common/set-title';
import Layout from '@components/layout';
import notFound from '@components/not-found/404';
import { ConfigProvider } from 'ant-design-vue';
import Echarts from '@common/echarts';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import antInputDirective from 'ant-design-vue/es/_util/antInputDirective';
import Antd from '@components/ant-design';
import Directives from '../pages/extends/directives';
import { routesDev } from './routers.dev';
import { routesDist } from './routers.dist';

import '../stores/apis/root';
/**
 * 全局变量 _global, 
 */

import global from './_global';


/**
 * Vuex Config
 */
import { storeConfig } from '../stores/root';

// const { query } = URL.parse();
// const result = getLoginInfo(query.code, query.flag);
/**
 * 全局组件
 */

Vue.component('set-title', SetTittle);
Vue.component('cci-echarts', Echarts);
Vue.component('cci-config-provider', ConfigProvider);

Vue.use(antInputDirective);
Vue.use(global);
Vue.use(request);
Vue.use(Vuex);
Vue.use(Directives);
Vue.use(Antd);

const store = new Vuex.Store(storeConfig);

Vue.use(Router);
let routes = [{
  path: '/',
  name: 'layout',
  component: Layout,
  children: [],
  redirect: '/tasklist',
},
{
  path: '*',
  name: '404',
  component: notFound
}];

let children = [];
if (isDev) {
  children = routesDev;
} else {
  children = routesDist;
}

routes[0].children = children;

export const router = new Router({
  // mode: 'history',
  routes
});

sync(store, router);

const app = new Vue({
  data: {
    locale: zhCN,
  },
  store,
  router,
  render(h) {
    return h(
      'cci-config-provider', // 国际化配置 让类似DatePicker 的组件显示中文
      {
        props: {
          locale: this.locale,
        }
      },
      [
        <div id="app">
          <router-view></router-view>
        </div>
      ]

    );
  }
}).$mount('#app');

globalThis.app = app;
globalThis.routes = routes;
