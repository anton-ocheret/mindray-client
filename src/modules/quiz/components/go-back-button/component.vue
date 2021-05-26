<template>
  <router-link class="back" :to="{ name }">
    <img :src="require('@images/icons/icon-back.svg')" class="icon" alt="" />
    <span class="app-text app-text--sm">
      Назад
    </span>
  </router-link>
</template>

<script>
import { ROUTE_NAMES } from '@shared/constants';

export default {
  name: 'go-back-button',
  props: {
    name: {
      type: String,
      default: ROUTE_NAMES.QUIZ,
    },
  },
};
</script>

<style lang="scss" scoped>
  .back {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .app-text {
    margin-left: 15px;
  }
</style>
