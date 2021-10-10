import { createNamespacedHelpers } from 'vuex';
import { mutations, actions } from '@shared/store/constants';

const { mapMutations, mapState, mapActions } = createNamespacedHelpers('global');

export default {
  computed: {
    ...mapState({
      footer: state => state.footer,
      model: state => state.quiz.model,
      quizId: state => state.quizId,
      history: state => state.quiz.history,
      isStepValid: state => state.quiz.isStepValid,
    }),
  },
  methods: {
    ...mapMutations({
      updateFooterKind: mutations.UPDATE_FOOTER_KIND,
      quizUpdateModel: mutations.QUIZ_UPDATE_MODEL,
      quizUpdateHistory: mutations.QUIZ_UPDATE_HISTORY,
      setQuizId: mutations.SET_QUIZ_ID,
      quizToggleStepValidity: mutations.QUIZ_TOOGLE_STEP_VALIDITY,
    }),
    ...mapActions({
      quizSendResults: actions.QUIZ_SEND_RESULT,
    }),
  },
};
