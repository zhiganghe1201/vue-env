export const taskMaintainConfig = [
  {
    path: '/taskmaintain',
    name: 'taskMaintain',
    component: () => import('./modules/main.vue'),
    meta: {
      title: '任务维护',
      route: [
        {
          title: '任务维护',
          path: '/taskmaintain'
        }
      ]
    }
  },
  {
    path: '/taskmaintain/look',
    name: 'taskLook',
    component: () => import('./modules/look.vue'),
    meta: {
      title: '查看任务',
      route: [
        {
          title: '任务维护',
          path: '/taskmaintain'
        },
        {
          title: '查看任务',
          path: '/taskmaintain/look'
        }
      ]
    }
  },
  {
    path: '/taskmaintain/add',
    name: 'taskAdd',
    component: () => import('./modules/add.vue'),
    meta: {
      title: '新建任务',
      route: [
        {
          title: '任务维护',
          path: '/taskmaintain'
        },
        {
          title: '新建任务',
          path: '/taskmaintain/add'
        }
      ]
    }
  }
];