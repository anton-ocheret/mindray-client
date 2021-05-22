<template>
  <header class="app-header">
    <router-link to="/" class="logo">
      <img :src="require('@images/icons/logo.svg')" />
    </router-link>

    <div class="app-header__center">
      <span class="app-text app-text--xs">
        Техподдержка
      </span>

      <a href="tel:+7 (499) 495-48-21" class="app-text app-text--lg">
        +7 (499) 495-48-21
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'the-header',
};
</script>

<style lang="scss">
  .app-header {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 30px;
    z-index: 1;

    @media(min-width: $sm) {
      padding: 30px 35px;
    }
  }

  .app-header__center {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media(min-width: $sm) {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
    }
  }

  .logo {
    width: 40px;

    @media(min-width: $sm) {
      width: auto;
    }
  }
</style>
