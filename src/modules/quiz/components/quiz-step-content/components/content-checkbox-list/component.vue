<template>
  <div class="checkbox-list">
    <ul :class="[options.cols && 'cols']">
      <li
        class="checkbox-list-item"
        :class="[options.cols && `col col-${options.cols}`]"
        v-for="(checkbox, index) in content.checkboxes"
        :key="`checkbox-list-item-${index}`"
      >
        <base-checkbox
          :id="`checkbox-list-item-${index}`"
          :label="checkbox.label"
          @base-checkbox:toggle="(checked) => handleCheckboxClick(checkbox.next, checked)"
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
    <base-accordion
      v-if="content.additional"
      :is-opened="isAdditionalOptionsOpened"
      @base-accordion:toggle="isAdditionalOptionsOpened = !isAdditionalOptionsOpened"
    >
      <template #activator="{ toggle }">
        <base-button
          kind="link"
          size="smallest"
          class="additional-options-toggler app-text app-text--sm"
          @click="toggle"
        >
          Дополнительные опции
          <img
            alt=""
            class="additional-options-toggler-icon"
            :class="{ 'opened': isAdditionalOptionsOpened }"
            :src="require('@images/icons/icon-arrow-small-cornflower.svg')"
          />
        </base-button>
      </template>
      <template #content>
        <ul
          class="additional-options-content"
          :class="[options.cols && 'cols']"
        >
          <li
            class="checkbox-list-item"
            :class="[options.cols && `col col-${options.cols}`]"
            v-for="(checkbox, index) in content.additional"
            :key="`additional-options-item-${index}`"
          >
            <base-checkbox
              :id="`additional-options-content-${index}`"
              :label="checkbox.label"
            />
          </li>
        </ul>
      </template>
    </base-accordion>
  </div>
</template>

<script>
  import BaseAccordion from '@shared/components/base/accordion';
  import BaseCheckbox from '@shared/components/base/checkbox';
  import BaseButton from '@shared/components/base/button';

  export default {
    name: 'checkbox-list',
    components: {
      BaseAccordion,
      BaseCheckbox,
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
    data: () => ({
      isAdditionalOptionsOpened: false,
    }),
    methods: {
      handleCheckboxClick(nextStepId, checked) {
        this.$root.$emit('quiz:update-preliminary-step-id', checked && nextStepId);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .checkbox-list-item {
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

  .additional-options-toggler {
    display: flex;
    align-items: center;
    color: $cornflower-blue;
    margin-top: 10px;
  }

  .additional-options-toggler-icon {
    margin-left: 7px;

    &.opened {
      transform: rotate(180deg);
    }
  }

  .additional-options-content {
    margin-top: 20px;
    @media(min-width: $md) {
      margin-top: 28px;
    }
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
