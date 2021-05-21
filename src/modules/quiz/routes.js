import { ROUTE_NAMES } from '@shared/constants';

const LayoutDefault = () => import(/* webpackChunkName: 'layout-default' */ '@shared/components/layouts/default');
const Quiz = () => import(/* webpackChunkName: 'quiz' */ '@modules/quiz/views/quiz');

export default [
  {
    path: '/quiz',
    name: ROUTE_NAMES.QUIZ,
    component: Quiz,
    meta: {
      layout: LayoutDefault,
    },
  },
];
