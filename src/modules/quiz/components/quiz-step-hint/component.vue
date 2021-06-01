<template>
  <div
    class="hint"
    :class="[position]"
    :style="{ left: `${leftPosition}px` }"
  >
    <img
      class="activator"
      :src="require('@images/icons/icon-hint.svg')"
      alt=""
      @click="isHintContentVisible = true"
    />

    <component
      v-if="isHintContentVisible"
      :is="`content-${hint.type}`"
      :content="hint.content"
      @hint-content:close="isHintContentVisible = false"
    />
  </div>
</template>

<script>
const ContentText = () => import(/* webpackChunkName: 'hint-content-text' */ '@modules/quiz/components/quiz-step-hint/components/content-text');

export default {
  name: 'quiz-step-heading-hint',
  components: {
    ContentText,
  },
  props: {
    hint: {
      type: Object,
      required: true,
    },
    leftPosition: {
      type: Number,
      default: 0,
    },
    position: {
      type: String,
      default: 'absolute',
    },
  },
  data: () => ({
    isHintContentVisible: false,
  }),
};
</script>

<style lang="scss" scoped>
  .hint {
    display: flex;
    top: 0;
    z-index: 2;
  }

  .hint.absolute {
    position: absolute;
    transform: translate(0, -50%);
  }

  .hint.relative {
    position: relative;
  }

  .activator {
    width: 14px;
    height: 14px;
    cursor: pointer;

    @media(min-width: $md) {
      width: auto;
      height: auto;
    }
  }

  .content-text {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    position: absolute;
    background-color: $white;
    top: 0;
    left: 0;
    transform: translate(calc(-100% - 10px), -5px);
    padding: 18px 38px 18px 18px;
    text-align: left;
    min-width: 350px;
  }

  .close {
    position: absolute;
    top: 13px;
    right: 18px;
    cursor: pointer;
  }
</style>
