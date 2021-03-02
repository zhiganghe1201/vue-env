/**
 * 根路由
 */
export const PRE_ROUTER_URL = process.env.NODE_ENV === 'developemnt'
  ? '/'
  : '/';

/**
 * 开发模式
 * !0 后端 !1前端:3000端口
 */
export const DEV_WITH_SERVER = !0;

/**
 * 用于判断登录token / user
 */
export const TOKEN_KEY = 'user_token';
export const ACCOUNT_TOKEN_KEY = 'accont_token';
export const BASE_URL = 'http://10.10.77.64:8091/#/api';

export const STATISTICAL_CYCLE = [
  {
    label: '月',
    value: 1
  },
  {
    label: '季',
    value: 2
  },
  {
    label: '年',
    value: 3
  }
];

export const ENTRY_STATUS = [
  {
    label: '待录入',
    value: 1
  },
  {
    label: '已录入',
    value: 2
  },
  {
    label: '已超期',
    value: 3
  },
  {
    label: '超期已录入',
    value: 4
  }
];


export const INDEX_TYPE = [
  {
    label: '黄赌毒',
    value: 1
  },
  {
    label: '纠纷警情',
    value: 2
  }
];

export const APPROVAL_STATUS = [
  {
    label: '未审批',
    value: 1
  },
  {
    label: '不通过',
    value: 2
  },
  {
    label: '通过',
    value: 3
  }
];

export const APPROVAL_RESULT = [
  {
    label: '通过',
    value: 3
  },
  {
    label: '不通过',
    value: 2
  }
];