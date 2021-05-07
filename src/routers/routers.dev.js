import { adviceConfig } from '@containers/advice/app.js';
import { notFoundConfig } from '@containers/notFound/app.js';

export const routesDev = [
  ...adviceConfig,
  ...notFoundConfig
];