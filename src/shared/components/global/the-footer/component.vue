<template>
  <footer class="app-footer">
    <div class="background footer-close"></div>
    <div v-toggle class="content">
      <div class="content-inner">
        <div v-hover-rotate="{ cls: 'footer-hover-rotate', rotation: '-=30' }" class="logo">
          <img class="footer-hover-rotate polygon" :src="require('@images/icons/logo-inner.svg')" alt="" />
        </div>
        <div class="nav">
          <div class="part d-md-none">
            <a href="#" class="footer-link app-text app-text--sm">
              <img class="link-icon" :src="require('@images/icons/icon-education.svg')" alt="" />
              <span class="footer-link-text">Образование</span>
            </a>
          </div>
          
          <div class="part">
            <p class="app-text app-text--lg text-center">Свяжитесь с нами сейчас</p>
          </div>

          <div class="part d-md-none">
            <a href="#" class="footer-link app-text app-text--sm">
              <img class="link-icon" :src="require('@images/icons/icon-user.svg')" alt="" />
              <span class="footer-link-text">Войти</span>
            </a>
          </div>
        </div>
        <div class="social">
          <base-button
            class="social-link app-text"
            kind="inverse"
            size="small"
          >
            <img class="social-link-icon" :src="require('@images/icons/icon-whatsapp.svg')" alt="" />
            <span>WhatsApp</span>
          </base-button>
          <base-button
            class="social-link"
            kind="inverse"
            size="small"
          >
            <img class="social-link-icon" :src="require('@images/icons/icon-telegram.svg')" alt="" />
            Telegram
          </base-button>
          <base-button
            class="social-link"
            kind="inverse"
            size="small"
          >
            <img class="social-link-icon" :src="require('@images/icons/icon-viber.svg')" alt="" />
            Viber
          </base-button>
          <base-button
            class="social-link"
            kind="inverse"
            size="small"
          >
            <img class="social-link-icon" :src="require('@images/icons/icon-chat.svg')" alt="" />
            Online-чат
          </base-button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import BaseButton from '@shared/components/base/button';
  import toggle from '@shared/components/global/the-footer/directives';
  import { hoverRotate } from '@shared/directives';

  export default {
    name: 'the-footer',
    components: {
      BaseButton,
    },
    directives: {
      toggle,
      hoverRotate,
    },
  };
</script>

<style lang="scss">
  html.footer-opened {
    .app-footer {
      .content {
        transform: translateZ(0) !important; 
      }
      
      .background {
        opacity: .7;
        pointer-events: auto;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .app-footer {
    display: flex;
    align-items: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    pointer-events: none;
    transition: transform .6s cubic-bezier(.35,.755,.42,.95),box-shadow .6s cubic-bezier(.35,.755,.42,.95);
  }

  .background {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $white;
    opacity: 0;
    transition: opacity .6s cubic-bezier(.35, .755, .42, .95);
    cursor: pointer;
  }

  .footer-link {
    position: relative;
    display: flex;
    align-items: center;

    .footer-link-text:after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 0;
      height: 1px;
      width: 0;
      background-color: currentColor;
      transition: width .25s ease-in-out;
    }

    &:hover .footer-link-text:after {
      width: 100%;
    }
  }

  .footer-link-text {
    position: relative;
  }

  .content {
    position: relative;
    width: 100%;
    pointer-events: auto;
    padding-top: 60px;
    transition: transform .6s cubic-bezier(.35, .755, .42, .95);
    background-image: url('../../../../../src/assets/images/icons/footer-pattern.svg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: 1120px;
    transform: translate3d(0, calc(100% - 95px), 0);

    &:hover {
      cursor: pointer;
      transform: translate3d(0, calc(100% - 105px), 0);
    }

    @media(min-width: $md) {
      transform: translate3d(0, calc(100% - 150px), 0);
      padding-top: 90px;
      background-size: auto;

      &:hover {
        transform: translate3d(0, calc(100% - 170px), 0);
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 150px;
        transform: translateY(-100%);
        height: 100px;
        width: 100%;
        background-color: $white;
        z-index: -1;
      }
    }
  }

  .content-inner {
    padding: 0 $padding-mobile-x 25px;
    background-color: $white;

    @media(min-width: $md) {
      padding: 0 $padding-desktop-x 40px;
    }
  }

  .nav {
    display: flex;
    justify-content: center;

    @media(min-width: $md) {
      display: flex;
      align-items: center;
    }
  }

  .part {
    width: calc(100% / 3);
    display: flex;

    &:first-child {
      justify-content: flex-start;
    }

    &:nth-child(2) {
      width: 100%;
      justify-content: center;

      @media(min-width: $md) {
        width: calc(100% / 3);
      }
    }

    &:last-child {
      justify-content: flex-end;
    }
  }

  .link {
    display: flex;
  }

  .link-icon {
    margin-right: 10px;
  }

  .social {
    margin-top: 55px;
    margin-left: -14px;
    margin-right: -14px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media(min-width: $md) {
      margin-top: 70px;
      margin-left: auto;
      margin-right: auto;
    }
  }

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

  .logo {
    width: 40px;
    height: 40px;
    background-color: $dull-lavender;
    border-radius: 50%;

    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    @media(min-width: $md) {
      width: 60px;
      height: 60px;
      top: 22px;
    }

    .polygon {
      width: 28px;

      @media(min-width: $md) {
        width: auto;
      }
    }
  }
</style>
