<template>
  <multiselect
    v-bind="$attrs"
    v-on="$listeners"
    :show-labels="false"
    :searchable="false"
  />
</template>

<script>
  import Multiselect from 'vue-multiselect';
  export default {
    name: 'base-select',
    components: {
      Multiselect,
    },
  };
</script>

<style lang="scss">
  .multiselect--active .multiselect__select {
    transform: translateY(-50%) rotate(-90deg);
  }

  .multiselect__placeholder {
    padding: 0;
  }

  .multiselect__select {
    display: flex;
    top: 50%;
    right: 15px;
    transform: translateY(-50%) rotate(90deg);
    background-image: url('../../../../../src/assets/images/icons/icon-arrow-small.svg');
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;

    &:before {
      content: none;
    }

    @media(min-width: $md) {
      right: 20px;
    }
  }

  .multiselect__tags {
    padding: 14px 20px;
    background-image: none;

    &::before {
      content: none;
    }

    @media(min-width: $md) {
      padding: 22px 40px;
    }
  }
</style>
