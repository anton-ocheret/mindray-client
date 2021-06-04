<template>
  <div class="navigation">
    <base-button
      v-if="navigation.next"
      class="control app-text app-text--md"
      kind="bordered"
      size="small"
    >
      Далее
    </base-button>

    <base-button
      v-if="navigation.skip"
      class="control app-text app-text--md"
      kind="link"
      size="smallest"
    >
      <span>Пропустить</span>
      <img class="icon-skip" src="@images/icons/icon-arrow-small.svg" alt="" />
    </base-button>
  </div>
</template>

<script>
  import BaseButton from '@shared/components/base/button';

  export default {
    name: 'step-navigation',
    components: {
      BaseButton,
    },
    props: {
      navigation: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    min-height: 44px;
  }

  .control {
    margin: 10px;
  }

  .icon-skip {
    margin-left: 7px;
    height: 13px;
  }
</style>
