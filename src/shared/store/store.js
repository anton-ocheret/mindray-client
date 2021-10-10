import axios from 'axios';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { mutations, actions, FOOTER_KIND_SMALL, FOOTER_KIND_DEFAULT } from '@shared/store/constants';
export default {
  namespaced: true,
  state: () => ({
    quizId: null,
    footer: {
      kind: FOOTER_KIND_DEFAULT,
    },
    quiz: {
      history: [],
      model: {},
      isStepValid: true,
    },
  }),
  mutations: {
    [mutations.UPDATE_FOOTER_KIND](state, { nextIndex, prevIndex }) {
      if (prevIndex > 0 && nextIndex > 0) return;
      if (nextIndex === 0) state.footer.kind = FOOTER_KIND_DEFAULT;
      if (nextIndex > 0) state.footer.kind = FOOTER_KIND_SMALL;
    },
    [mutations.QUIZ_UPDATE_MODEL](state, payload) {
      state.quiz.model[payload.id] = payload;
    },
    [mutations.SET_QUIZ_ID](state, payload) {
      state.quizId = payload;
    },
    [mutations.QUIZ_UPDATE_HISTORY](state, payload) {
      state.quiz.history = [...payload];
    },
    [mutations.QUIZ_TOOGLE_STEP_VALIDITY](state, payload) {
      state.quiz.isStepValid = payload;
    },
  },
  actions: {
    [actions.QUIZ_SEND_RESULT]: ({ state }, { applicationNumber, quizId }) => {
      const date = format(new Date(), 'MM MMMM yyyy года в HH:mm', { locale: ru });
      const answers = state.quiz.history.map((stepId) => (
        state.quiz.model[stepId] ? ({
          ...state.quiz.model[stepId],
        }) : ({
          id: stepId,
          payload: null,
        })
      ));

      return new Promise((resolve, reject) => {
        axios.post('/results', { data: { applicationNumber, date, answers, quizId } })
          .then((res) => console.dir(res.data), resolve())
          .catch((error) => console.dir(error), reject());
      });
    },
  },
};
