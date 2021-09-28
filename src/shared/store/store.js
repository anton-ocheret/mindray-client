import axios from 'axios';
import { mutations, actions, FOOTER_KIND_SMALL, FOOTER_KIND_DEFAULT } from '@shared/store/constants';

export default {
  namespaced: true,
  state: () => ({
    footer: {
      kind: FOOTER_KIND_DEFAULT,
    },
    quiz: {
      model: {},
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
  },
  actions: {
    [actions.QUIZ_SEND_RESULT]: ({ state }, { history }) => {
      const data = history.map((stepId) => (
        state.quiz.model[stepId] ? ({
          ...state.quiz.model[stepId],
        }) : ({
          id: stepId,
          payload: null,
        })
      ));

      return new Promise((resolve, reject) => {
        axios.post('/quiz-amocrm.php', { data })
          .then((res) => console.dir(res.data), resolve())
          .catch((error) => console.dir(error), reject());
      });
    },
  },
};
