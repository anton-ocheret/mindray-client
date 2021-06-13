<template>
  <header class="app-header">
    <div class="logo" v-hover-rotate>
      <img class="logo-outer" :src="require('@images/icons/logo-outer.svg')" />
      <img class="hover-rotate logo-inner" :src="require('@images/icons/logo-inner.svg')" alt="" />
    </div>

    <div class="app-header__center d-md-flex">
      <span class="app-text app-text--xs">
        Техподдержка
      </span>

      <a href="tel:+7 (499) 495-48-21" class="app-text app-text--lg link">
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

<style lang="scss" scoped>
  .app-header {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px $padding-mobile-x;
    z-index: 3;

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

  .logo-outer {
    width: 100%;
    height: 100%;
  }

  .logo-inner {
    width: 70%;
    height: 70%;
  }

  .logo {
    width: 40px;
    height: 40px;
    position: relative;

    @media(min-width: $md) {
      width: 60px;
      height: 60px;
    }

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .link {
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      height: 1px;
      width: 0;
      background-color: currentColor;
      transition: width .25s ease-in-out;
    }

    &:hover:after {
      width: 100%;
    }
  }
</style>
