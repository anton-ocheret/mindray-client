<template>
  <header class="app-header">
    <router-link v-hover-rotate to="/" class="logo">
      <img :src="require('@images/icons/logo-outer.svg')" alt="" />
      <img class="hover-rotate logo-inner" :src="require('@images/icons/logo-inner.svg')" alt="" />
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
import { hoverRotate } from '@shared/directives';
export default {
  name: 'the-header',
  directives: {
    hoverRotate,
  },
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
    padding: 25px $padding-mobile-x;
    z-index: 1;

    @media(min-width: $sm) {
      padding: 30px $padding-desktop-x;
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
    height: 40px;
    position: relative;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    @media(min-width: $sm) {
      width: 60px;
      height: 60px;
      position: relative;
    }
  }

  .logo-inner {
    width: 70%;
    height: 70%;
  }
</style>
