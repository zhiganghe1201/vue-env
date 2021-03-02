export const approvalListConfig = [
  {
    path: '/approvallist',
    name: 'approvalList',
    component: () => import('./modules/main.vue'),
    meta: {
      title: '审批列表',
      route: [
        {
          title: '审批列表',
          path: '/approvallist'
        }
      ]
    }
  },
  {
    path: '/approvallist/apply',
    name: 'approvalApplu',
    component: () => import('./modules/apply.vue'),
    meta: {
      title: '审批',
      route: [
        {
          title: '审批列表',
          path: '/approvallist'
        },
        {
          title: '审批',
          path: '/approvallist/apply'
        }
      ]
    }
  }
];