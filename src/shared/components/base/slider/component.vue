<template>
    <div class="slider">
      <div
        v-swiper:slider="options"
        delete-instance-on-destroy
        cleanup-styles-on-destroy
        auto-destroy
      >
        <div class="swiper-wrapper">
          <slot name="slides" slide-wrapper-class="swiper-slide"></slot>
        </div>
      </div>
      <div class="swiper-button-prev">
        <img :src="require('@images/icons/icon-slider-arrow-prev.svg')" alt="" />
      </div>
      <div class="swiper-button-next">
        <img :src="require('@images/icons/icon-slider-arrow-next.svg')" alt="" />
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
  import { directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: 'base-slider',
    directives: {
      swiper: directive,
    },
    data: () => ({
      options: {
        spaceBetween: 20,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      },
    }),
  };
</script>

<style>
  :root {
    --swiper-navigation-size: 46px;
    --swiper-theme-color: #1c1c1c;
  }
</style>

<style lang="scss" scoped>
  $pagination-margin-top: 15px;
  $pagination-height: 8px;
  $pagination-full-height: $pagination-margin-top + $pagination-height;

  .slider {
    position: relative;
    margin-top: 20px;
  }
  .slider-heading {
    margin-bottom: 20px;
  }
  .swiper-slide {
    display: flex;
    border-radius: 6px;
    overflow: hidden;
    img {
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
    }
  }
  [class^="swiper-button"] {
    display: none;
    width: var(--swiper-navigation-size);
    background-color: $white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    transition: box-shadow .25s ease-in-out;
    &:after {
      content: none;
    }
    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.35);
    }
    @media (min-width: $sm) {
      display: flex;
    }
  }
  .swiper-button-next {
    transform: translate(50%, -$pagination-full-height / 2);
    right: 0px;

    img {
      position: relative;
      left: 1px;
    }
  }
  .swiper-button-prev {
    transform: translate(-50%, -$pagination-full-height / 2);
    left: 0px;

    img {
      position: relative;
      left: -1px;
    }
  }
  .swiper-pagination {
    height: $pagination-height;
    margin-top: $pagination-margin-top;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
  ::v-deep .swiper-pagination-bullet {
    transition: width .25s ease-in-out;
    border-radius: 10px;
    margin-left: 2px;
    margin-right: 2px;
  }
  ::v-deep .swiper-pagination-bullet-active {
    width: 15px;
  }
</style>
