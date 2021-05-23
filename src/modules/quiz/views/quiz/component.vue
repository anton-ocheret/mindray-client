<template>
  <div class="quiz">
    <img v-move-with-cursor :src="require('@images/icons/blob-cursor.svg')" alt="" />
    <router-view />
  </div>
</template>

<script>
  import { moveWithCursor } from '@shared/directives';
  import { ROUTE_NAMES } from '@shared/constants';
  import { quiz } from '@modules/quiz';
  
  export default {
    name: 'Quiz',
    directives: { moveWithCursor },
    data: () => ({ quiz }),
    mounted() {
      !this.$router.history.current.params.id && this.$router.push({
        name: ROUTE_NAMES.QUIZ_STEP,
        params: {
          id: this.quiz.navigation.first,
        },
      });
    },
  };
</script>

<style lang="scss">
  .quiz {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    background-image: url('../../../../../src/assets/images/icons/blobs.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
