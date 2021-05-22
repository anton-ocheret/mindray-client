<template>
  <div class="layout-default">
    <the-header />
    <slot></slot>
  </div>
</template>

<script>
  import TheHeader from '@shared/components/global/the-header';

  export default {
    name: 'layout-default',
    components: { TheHeader },
  };
</script>

<style lang='scss' scoped>
  .layout-default {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: $mercury;
  }
</style>
