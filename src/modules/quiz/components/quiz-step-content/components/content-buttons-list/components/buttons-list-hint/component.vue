<template>
  <base-hint
    class="buttons-list-hint"
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

  export default {
    name: 'buttons-list-hint',
    components: {
      BaseHint,
      BaseHintContentText,
    },
    props: {
      content: {
        type: Object,
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
  .buttons-list-hint {
    position: relative;
    width: 14px;
    height: 14px;
    
    @media(min-width: $md) {
      width: auto;
      height: auto;
    }
  }
</style>
