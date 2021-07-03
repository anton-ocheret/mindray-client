<template>
  <figure>
    <img
      alt=""
      class="img"
      :srcset="`${require(`@images/slider-images/${image.x1}`)} 1x, ${require(`@images/slider-images/${image.x2}`)} 2x`"
    />
    <figcaption class="figcaption">
      <template v-if="title">
        {{ title }}
      </template>
      <slide-button
        v-if="hasModal"
        class="lg"
        :slide-index="slideIndex"
        @slide-button:click="openModal"
      />
    </figcaption>
    <slide-button
      v-if="hasModal"
      :slide-index="slideIndex"
      @slide-button:click="openModal"
    />
  </figure>
</template>

<script>
  import SlideButton from '@modules/quiz/components/quiz-step-content/components/content-slider/components/slide-button';
  import { identity } from 'ramda';

  export default {
    name: 'slide',
    components: {
      SlideButton,
    },
    props: {
      slideIndex: {
        type: Number,
        required: true,
      },
      image: {
        type: Object,
        required: true,
      },
      title: {
        type: String,
        default: '',
      },
      hasModal: {
        type: Boolean,
        required: true,
      },
      openModal: {
        type: Function,
        default: identity,
      },
    },
  };
</script>

<style lang="scss" scoped>
  .figcaption {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 28px 20px 16px;
    color: $white;
    background-image: linear-gradient(360deg, rgba(0, 0, 0, .7) 0%, rgba(0, 0, 0, 0) 100%);
    @media (min-width: $sm) {
      padding: 55px 22px 38px;
    }
    @media (min-width: $lg) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
