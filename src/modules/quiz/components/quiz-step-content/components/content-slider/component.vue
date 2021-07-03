<template>
  <div>
    <h5
      v-if="content.heading"
      class="app-text app-text--md"
    >
      {{ content.heading }}
    </h5>

    <base-slider>
      <template #slides="{ slideWrapperClass }">
         <div
          :key="index"
          :class="slideWrapperClass"
          v-for="(slide, index) in content.slides"
        >
          <slide
            :slide-index="index"
            :image="slide.image"
            :title="slide.title"
            :has-modal="Boolean(slide.modal)"
            :open-modal="handleModalOpen"
          />
        </div>
      </template>
    </base-slider>

    <base-modal
      :opened="sholdShowModal"
      @base-modal:close="handleModalClose"
    >
      <img
        v-if="sholdShowModal"
        class="modal-content-image"
        alt=""
        :srcset="`${require(`@images/slider-images/big-images/${content.slides[modalOpenedIndex].modal.image.x1}`)} 1x, ${require(`@images/slider-images/big-images/${content.slides[modalOpenedIndex].modal.image.x2}`)} 2x`"
      />
    </base-modal>
  </div>
</template>

<script>
import Slide from '@modules/quiz/components/quiz-step-content/components/content-slider/components/slide';
import BaseSlider from '@shared/components/base/slider';
import BaseModal from '@shared/components/base/modal';

export default {
  name: 'content-slider',
  components: {
    BaseSlider,
    BaseModal,
    Slide,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    modalOpenedIndex: null,
  }),
  methods: {
    handleModalOpen(index) {
      this.modalOpenedIndex = index;
    },
    handleModalClose() {
      this.modalOpenedIndex = null;
    },
  },
  computed: {
    sholdShowModal() {
      return Boolean(this.modalOpenedIndex !== null);
    },
  },
};
</script>

<style lang="scss" scoped>
  .modal-content-image {
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
  }
</style>
