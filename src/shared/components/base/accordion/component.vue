<template>
  <div>
    <slot
      name="activator"
      :toggle="toggle"
    ></slot>

    <slot
      v-if="isOpened"
      name="content"
    ></slot>
  </div>
</template>

<script>
  export default {
    name: 'base-accordion',
    props: {
      isOpened: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      toggle() {
        this.$emit('base-accordion:toggle');
      },
    },
  };
</script>
