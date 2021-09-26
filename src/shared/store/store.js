import { mutations, FOOTER_KIND_SMALL, FOOTER_KIND_DEFAULT } from '@shared/store/constants';

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
      // console.log(payload);
      state.quiz.model[payload.id] = payload;
    },
  },
};
