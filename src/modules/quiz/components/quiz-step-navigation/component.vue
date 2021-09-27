<template>
  <div class="navigation">
    <quiz-step-back
      v-if="previousStepId"
      :step-back-handler="handleStepPrev"
    />
    <base-button
      v-if="isNextStepButtonVisible"
      class="control app-text app-text--md"
      kind="bordered"
      size="small"
      @click="handleStepNext"
    >
      Далее
    </base-button>

    <base-button
      v-if="navigation.skip"
      class="control app-text app-text--md"
      kind="link"
      size="smallest"
      @click="handleStepSkip"
    >
      <span>Пропустить</span>
      <img class="icon-skip" src="@images/icons/icon-arrow-small.svg" alt="" />
    </base-button>

    <!-- Добавил кнопку "далее" идентичную по стилю кнопке "пропустить" -->
    <base-button
      v-if="navigation.further"
      class="control app-text app-text--md"
      kind="link"
      size="smallest"
      @click="handleStepFurther"
    >
      <span>Далее</span>
      <img class="icon-skip" src="@images/icons/icon-arrow-small.svg" alt="" />
    </base-button>

  </div>
</template>

<script>
  import emitContentPartUpdate from '@modules/quiz/mixins/emit-content-part-update';

  import BaseButton from '@shared/components/base/button';
  import QuizStepBack from '@modules/quiz/components/quiz-step-back';

  export default {
    name: 'step-navigation',
    components: {
      BaseButton,
      QuizStepBack,
    },
    mixins: [emitContentPartUpdate],
    props: {
      previousStepId: {
        type: String,
        default: null,
      },
      navigation: {
        type: Object,
        required: true,
      },
      updateStep: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        preliminaryNextStepId: null,
      };
    },
    computed: {
      isNextStepButtonVisible() {
        return Boolean(this.navigation.next) || Boolean(this.preliminaryNextStepId);
      },
    },
    methods: {
      updatePreliminaryNextStepId(nextStepId) {
        this.preliminaryNextStepId = nextStepId;
      },
      handleStepNext() {
        this.updateStep(this.preliminaryNextStepId || this.navigation.next);
        this.updatePreliminaryNextStepId(null);
      },
      handleStepPrev() {
        this.updateStep(this.previousStepId, false);
      },
      handleStepSkip() {
        this.updateStep(this.navigation.skip);
      },
      handleStepFurther() {
        this.updateStep(this.navigation.further);
      },
    },
     mounted() {
      this.$root.$on('quiz:update-preliminary-step-id', this.updatePreliminaryNextStepId);
    },
    beforeDestroy() {
      this.$root.$off('quiz:update-preliminary-step-id', this.updatePreliminaryNextStepId);
    },
  };
</script>

<style scoped lang="scss">
  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    min-height: 44px;
  }

  .control {
    margin: 10px;
  }

  .icon-skip {
    margin-left: 7px;
    height: 13px;
  }
</style>
