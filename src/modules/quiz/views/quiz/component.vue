<template>
  <div class="quiz">
    <div class="quiz__content">
      <go-back-button />
      <router-view :step="quiz.steps[quiz.navigation.first]" />
    </div>
    <img
      :src="require('@images/icons/blob-cursor.svg')"
      v-move-with-cursor
      alt=""
    />
  </div>
</template>

<script>
  import GoBackButton from '@modules/quiz/components/go-back-button';
  import { moveWithCursor } from '@shared/directives';
  import { ROUTE_NAMES } from '@shared/constants';
  import { quiz } from '@modules/quiz';
  
  export default {
    name: 'Quiz',
    components: {
      GoBackButton,
    },
    directives: { moveWithCursor },
    data: () => ({ quiz }),
    mounted() {
      // TODO: REWRITE!!!!
      !this.$router.history.current.params.id && this.$router.push({
        name: ROUTE_NAMES.QUIZ_STEP,
        params: {
          id: this.quiz.navigation.first,
        },
      });
      // END TODO: REWRITE!!!!
    },
  };
</script>

<style lang="scss">
  .quiz {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    background-image: url('../../../../../src/assets/images/icons/blobs.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 130px $padding-mobile-x;

    @media(min-width: $sm) {
      padding: 140px $padding-desktop-x;
    }
  }

  .quiz__content {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    position: relative;
    max-width: 1340px;
    z-index: 2;
  }
</style>
