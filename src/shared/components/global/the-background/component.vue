<template>
  <div class="app-background">
    <img :src="require('@images/icons/blob-cursor.svg')" v-move-with-cursor alt="" />
    <img class="blob medium" :src="require('@images/icons/icon-blob-blue.svg')" alt="" />
    <img class="blob big" :src="require('@images/icons/icon-blob-green.svg')" alt="" />
    <slot></slot>
  </div>
</template>

<script>
  import { moveWithCursor } from '@shared/directives';

  export default {
    name: 'the-background',
    directives: { moveWithCursor },
  };
</script>

<style lang="scss" scoped>
  .app-background {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  .blob {
    position: fixed;
    z-index: 0;

    &.medium {
      top: calc((727px - 1027px) / 2);
      right: calc((727px - 1027px) / 2);
    }

    &.big {
      top: calc((1008px - 1508px) / 2);
      left: calc((1008px - 1508px) / 2);
    }
  }
</style>
