export interface Environment {
  apiUrl: string;
  dev: boolean;
}

import { environment as devEnvironment } from './environment.dev';
import { environment as prodEnvironment } from './environment.prod';

const isDev = true;

export const environment: Environment = isDev
  ? devEnvironment
  : prodEnvironment;
