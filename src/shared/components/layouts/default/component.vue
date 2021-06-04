<template>
  <the-background>
    <div class="layout-default">
      <the-header />
      <main class="main">
        <slot></slot>
      </main>
      <the-footer />
    </div>
  </the-background>
</template>

<script>
  import TheBackground from '@shared/components/global/the-background';
  import TheHeader from '@shared/components/global/the-header';
  import TheFooter from '@shared/components/global/the-footer';

  export default {
    name: 'layout-default',
    components: {
      TheBackground,
      TheHeader,
      TheFooter,
    },
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
