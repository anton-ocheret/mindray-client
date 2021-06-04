<template>
  <div>
    <img :src="require('@images/icons/blob-cursor.svg')" v-move-with-cursor alt="" />
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
