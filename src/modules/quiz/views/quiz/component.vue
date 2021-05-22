<template>
  <div class="quiz">
    <img v-move-with-cursor :src="require('@images/icons/blob-cursor.svg')" />
  </div>
</template>

<script>
  import { moveWithCursor } from '@shared/directives';

  export default {
    name: 'Quiz',
    directives: { moveWithCursor },
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
