<template>
  <div class="hint" @[toggleEvent].stop>
    <slot name="activator" :toggle="toggle">
      <img
        alt=""
        class="activator-image"
        :src="require('@images/icons/icon-hint.svg')"
        @[toggleEvent]="toggle"
      />
    </slot>
    <div v-if="isOpened" :class="`content-${contentType}`">
      <slot
        name="content"
        :toggle="toggle"
      ></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-hint',
  props: {
    isOpened: {
      type: Boolean,
      required: true,
    },
    toggleEvent: {
      type: String,
      default: 'click',
    },
    contentType: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    toggle() {
      this.$emit('base-hint:toggle');
    },
  },
};
</script>

<style lang="scss" scoped>
  .hint {
    display: flex;
  }

  .content-default {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(calc(-100% - 14px), -50%)
  }

  .activator-image {
    cursor: pointer;
  }
</style>
