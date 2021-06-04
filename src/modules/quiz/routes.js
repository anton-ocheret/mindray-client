import { ROUTE_NAMES } from '@shared/constants';
import { configureDefaultLayout } from '@shared/utils';

const Quiz = () => import(/* webpackChunkName: 'quiz' */ '@modules/quiz/views/quiz');

export default [
  configureDefaultLayout({
    name: ROUTE_NAMES.QUIZ,
    path: '/quiz',
    component: Quiz,
  }),
];
