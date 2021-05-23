import { ROUTE_NAMES } from '@shared/constants';
import { configureDefaultLayout } from '@shared/utils';

const Quiz = () => import(/* webpackChunkName: 'quiz' */ '@modules/quiz/views/quiz');
const QuizStep = () => import(/* webpackChunkName: 'quiz-step' */ '@modules/quiz/views/quiz-step');

export default [
  configureDefaultLayout({
    name: ROUTE_NAMES.QUIZ,
    path: '/quiz',
    component: Quiz,
    children: [
      configureDefaultLayout({
        path: ':id',
        name: ROUTE_NAMES.QUIZ_STEP,
        component: QuizStep,
        props: true,
      }),
    ],
  }),
];
