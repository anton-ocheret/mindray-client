<template>
    <span class="base-radio">
      <input
        class="base-radio-input"
        type="radio"
        :id="id"
        v-bind="$attrs"
        :checked="checked"
        :disabled="disabled"
        @change="onChange"
      />

      <label
        :for="id"
        class="base-radio-label app-text app-text--md"
      >
        {{ label }}
      </label>
    </span>
</template>

<script>
export default {
  name: 'base-radio',
  inheritAttrs: false,
  props: {
    id: {
      type: [Number, String],
      required: true,
    },

    checked: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      default: '',
    },

    disabled: {
      type: Boolean,
    },
  },

  methods: {
    onChange(event) {
      this.$emit('toggle-checkbox', event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
  .base-radio {
    display: inline-flex;
    align-items: center;
  }

  .base-radio-input {
    display: none;

    &:checked + .base-radio-label:after {
      opacity: 1;
    }
  }

  .base-radio-label {
    position: relative;
    padding-left: 34px;
    margin-bottom: 0;
    user-select: none;
    cursor: pointer;
    line-height: 1.45;

    &:after,
    &:before {
      content: '';
      position: absolute;
      transition: all .15s;
    }

    &:before {
      left: 0;
      top: 0;
      width: 19px;
      height: 19px;
      background-color: $white;
      border-radius: 10px;
      border: 1px solid $porcelain;
    }

    &:after {
      top: 4px;
      left: 5px;
      width: 12px;
      height: 13px;
      border-radius: 50%;
      background-color: $mantis;
      opacity: 0;
    }
  }
</style>
