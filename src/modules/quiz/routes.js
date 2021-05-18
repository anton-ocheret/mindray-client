const Quiz = () => import(/* webpackChunkName: 'quiz' */ '@modules/quiz/views/quiz');

export default [
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
  },
];
