<template>
  <base-hint
    v-position-in-text="{ elementClass: textPositionElementClass }"
    class="heading-hint"
    :is-opened="isHintOpened"
    :content-type="content.type"
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
  import BaseHintContentModal from '@shared/components/base/hint/components/content-modal';
  import BaseHintContentText from '@shared/components/base/hint/components/content-text';
  import BaseHint from '@shared/components/base/hint';
  import { positionInText } from '@shared/directives';

  export default {
    name: 'heading-hint',
    components: {
      BaseHintContentModal,
      BaseHintContentText,
      BaseHint,
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
    margin-left: 4px;
    margin-top: -4px;
    top: 0;
    opacity: 0;
    transition: opacity .17s ease-in-out;
    
    @media(min-width: $md) {
      width: auto;
      height: auto;
    }
  }
</style>
