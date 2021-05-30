<template>
  <div class="buttons-content">
    <base-button
      class="button app-text app-text--lg"
      v-for="button in Object.values(content)"
      :key="button.id"
    >
      {{ button.content.text }}
    </base-button>
  </div>
</template>

<script>
  import BaseButton from '@shared/components/base/button';

  export default {
    name: 'content-buttons',
    components: {
      BaseButton,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .buttons-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .button {
    margin: 7px;
    min-width: 100%;

    @media(min-width: $sm) {
      margin: 10px;
      min-width: 0;
    }
  }
</style>
