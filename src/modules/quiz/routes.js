import { ROUTE_NAMES } from '@shared/constants';
import { configureDefaultLayout } from '@shared/utils';

const Quiz = () => import(/* webpackChunkName: 'quiz' */ '@modules/quiz/views/quiz');
const QuizStepLast = () => import(/* webpackChunkName: 'quiz.last' */ '@modules/quiz/views/quiz-step-last');
const QuizAutoreply = () => import(/* webpackChunkName: 'quiz.autoreply' */ '@modules/quiz/views/quiz-autoreply');

export default [
  configureDefaultLayout({
    name: ROUTE_NAMES.QUIZ,
    path: '/:url',
    component: Quiz,
  }),
  configureDefaultLayout({
    name: ROUTE_NAMES.QUIZ_STEP_LAST,
    path: '/quiz/last',
    component: QuizStepLast,
  }),
  configureDefaultLayout({
    name: ROUTE_NAMES.QUIZ_AUTOREPLY,
    path: '/quiz/autoreply',
    component: QuizAutoreply,
  }),
];
