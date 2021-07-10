<template>
    <span class="base-checkbox">
      <input
        class="base-checkbox-input"
        type="checkbox"
        :id="id"
        v-bind="$attrs"
        :checked="checked"
        :disabled="disabled"
        @change="onChange"
      />

      <label
        :for="id"
        class="base-checkbox-label app-text app-text--md"
      >
        {{ label }}
      </label>
    </span>
</template>

<script>
export default {
  name: 'base-checkbox',
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
      this.$emit('base-checkbox:toggle', event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
  .base-checkbox {
    display: inline-flex;
    align-items: center;
  }

  .base-checkbox-input {
    display: none;

    &:checked + .base-checkbox-label:before {
      background-color: $mantis;
    }

    &:checked + .base-checkbox-label:after {
      background-color: $white;
      transform: translateX(19px);
    }
  }

  .base-checkbox-label {
    position: relative;
    padding-left: 46px;
    margin-bottom: 0;
    user-select: none;
    cursor: pointer;
    line-height: 1.45;

    &:after,
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      border: 1px solid $porcelain;
      transition: all .15s;
    }

    &:before {
      width: 36px;
      height: 18px;
      background-color: $white;
      border-radius: 10px;
    }

    &:after {
      width: 17px;
      height: 17px;
      border-radius: 50%;
      background-color: $porcelain;
    }
  }
</style>
