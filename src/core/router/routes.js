import { ROUTE_NAMES } from '@shared/constants';
import { routes as quiz } from '@modules/quiz';

export default [
  {
    path: '/',
    redirect: { name: ROUTE_NAMES.QUIZ },
  },
  ...quiz,
];
