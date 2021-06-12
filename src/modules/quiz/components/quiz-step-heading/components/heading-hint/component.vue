<template>
  <base-hint
    v-position-in-text="{ elementClass: textPositionElementClass }"
    class="heading-hint"
    :is-opened="isHintOpened"
    @base-hint:toggle="handleHintToggle"
  >
    <template #content="{ toggle }">
      <component
        :is="`base-hint-content-${content.type}`"
        :content="content.data"
        :toggle-handler="toggle"
      />
    </template>
  </base-hint>
</template>

<script>
  import BaseHint from '@shared/components/base/hint';
  import BaseHintContentText from '@shared/components/base/hint/components/content-text';
  import { positionInText } from '@shared/directives';

  export default {
    name: 'heading-hint',
    components: {
      BaseHint,
      BaseHintContentText,
    },
    directives: {
      positionInText,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
      textPositionElementClass: {
        type: String,
        required: true,
      },
    },
    data: () => ({
      isHintOpened: false,
    }),
    methods: {
      handleHintToggle() {
        this.isHintOpened = !this.isHintOpened;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .heading-hint {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 0;
    transform: translate(0, -50%);
    
    @media(min-width: $md) {
      width: auto;
      height: auto;
    }
  }
</style>
