import { createNamespacedHelpers } from 'vuex';
import { mutations } from '@shared/store/constants';

const { mapMutations, mapState } = createNamespacedHelpers('global');

export default {
  computed: {
    ...mapState(['footer']),
  },
  methods: {
    ...mapMutations({
      updateFooterKind: mutations.UPDATE_FOOTER_KIND,
    }),
  },
};
