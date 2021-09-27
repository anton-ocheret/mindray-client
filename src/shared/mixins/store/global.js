import { createNamespacedHelpers } from 'vuex';
import { mutations, actions } from '@shared/store/constants';

const { mapMutations, mapState, mapActions } = createNamespacedHelpers('global');

export default {
  computed: {
    ...mapState({
      footer: state => state.footer,
      model: state => state.quiz.model,
    }),
  },
  methods: {
    ...mapMutations({
      updateFooterKind: mutations.UPDATE_FOOTER_KIND,
      quizUpdateModel: mutations.QUIZ_UPDATE_MODEL,
    }),
    ...mapActions({
      quizSendResults: actions.QUIZ_SEND_RESULT,
    }),
  },
};
