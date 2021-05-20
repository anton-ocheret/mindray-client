const LayoutDefault = () => import(/* webpackChunkName: 'layout-default' */ '@shared/components/layouts/default');
const Quiz = () => import(/* webpackChunkName: 'quiz' */ '@modules/quiz/views/quiz');

export default [
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
    meta: {
      layout: LayoutDefault,
    },
  },
];
