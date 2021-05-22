<template>
  <div class="layout-default">
    <the-header />
    <main class="main">
      <slot></slot>
    </main>
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
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: $mercury;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
