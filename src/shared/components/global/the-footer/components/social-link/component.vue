<template>
  <base-button
    class="social-link app-text app-text--md"
    kind="inverse"
    size="small"
  >
    <img
      v-if="icon"
      class="social-link-icon"
      :src="require(`@images/icons/icon-${icon}.svg`)" alt=""
    />
    <span><slot></slot></span>
  </base-button>
</template>

<script>
  import BaseButton from '@shared/components/base/button';

  export default {
    name: 'social-link',
    props: {
      icon: {
        type: String,
        required: true,
      },
    },
    components: {
      BaseButton,
    },
  };
</script>

<style lang="scss" scoped>
  .social-link {
    margin: 7px;
    width: calc(50% - 14px);

    @media(min-width: $sm) {
      width: auto;
      margin: 10px;
    }
  }

  .social-link-icon {
    margin-right: 10px;
  }
</style>
