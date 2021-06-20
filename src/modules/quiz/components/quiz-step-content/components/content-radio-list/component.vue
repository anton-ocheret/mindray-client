<template>
  <div class="radio-list">
    <ul :class="[options.cols && 'cols']">
      <li
        class="radio-list-item"
        :class="[options.cols && `col col-${options.cols}`]"
        v-for="(radio, index) in content.radios"
        :key="`radio-list-item-${index}`"
      >
        <base-radio
          :id="`radio-list-item-${index}`"
          :label="radio.label"
          name="rad"
        />
      </li>
    </ul>
    <p
      v-if="content.notInList"
      class="not-in-list"
    >
      Нет в списке?

       <base-button
          kind="link"
          size="smallest"
          class="not-in-list-link app-text app-text--sm"
        >
          {{ content.notInList.link.text }}
        </base-button>
    </p>
  </div>
</template>

<script>
  import BaseButton from '@shared/components/base/button';
  import BaseRadio from '@shared/components/base/radio';

  export default {
    name: 'radio-list',
    components: {
      BaseRadio,
      BaseButton,
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
      options: {
        type: Object,
        default: () => ({}),
      },
    },
  };
</script>

<style lang="scss" scoped>
  .radio-list-item {
    margin-bottom: 10px;
    @media(min-width: $sm) {
      margin-bottom: 20px;  
    }
  }

  .cols {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
  }

  .col {
    padding-left: 10px;
    padding-right: 10px;
  }

  .col-1,
  .col-2,
  .col-3 {
    width: 100%;
  }

  @media(min-width: $md) {
    .col-2 { width: 50% }
    .col-3 { width: 33.3333% }
  }

  .not-in-list {
    margin-top: 10px;
  }

  .not-in-list-link {
    position: relative;
    margin-left: 15px;
    display: inline-flex;
    color: $cornflower-blue;
    font-weight: $font-weight-semibold;

    &:before {
      content: '';
      position: absolute;
      width: calc(100% + 1px);
      height: 1px;
      bottom: 0;
      left: -1px;
      background-color: rgba($cornflower-blue, .6);
    }
  }
</style>
