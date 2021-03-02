export const notFoundConfig = [
  {
    path: '/404.html',
    name: 'not-found',
    component: () => import('./modules/404.vue'),
    meta: {
      title: '404',
      route: [
        {
          title: '404',
          path: '/404.html'
        }
      ]
    }
  }
];