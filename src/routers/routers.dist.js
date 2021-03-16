import { adviceConfig } from '@containers/advice/app.js';
import { approvalListConfig } from '@containers/approvalList/app.js';
import { notFoundConfig } from '@containers/notFound/app.js';
import { taskListConfig } from '@containers/taskList/app.js';
import { taskMaintainConfig } from '@containers/taskMaintain/app.js';

export const routesDist = [
  ...adviceConfig,
  ...approvalListConfig,
  ...notFoundConfig,
  ...taskListConfig,
  ...taskMaintainConfig
];