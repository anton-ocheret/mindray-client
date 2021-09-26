<template>
  <div class="multiple-fields">
    <div
      v-for="(field, index) in localContent"
      class="multiple-fields-item"
      :key="index"
    >
      <component
        :is="`base-${field.type}`"
        v-model="localContent[index].value"
        class="app-text app-text--lg"
        v-bind="field.data"
      />
    </div>
  </div>  
</template>

<script>
  import emitContentPartUpdate from '@modules/quiz/mixins/emit-content-part-update';

  import BaseAutocomplete from '@shared/components/base/autocomplete';
  import BaseTextarea from '@shared/components/base/textarea';
  import BaseButton from '@shared/components/base/button';
  import BaseSelect from '@shared/components/base/select';
  import BaseInput from '@shared/components/base/input';

  export default {
    name: 'multiple-fields',
    components: {
      BaseAutocomplete,
      BaseTextarea,
      BaseButton,
      BaseSelect,
      BaseInput,
    },
    mixins: [emitContentPartUpdate],
    props: {
      content: {
        type: Array,
        required: true,
      },
    },
    watch: {
      localContent: {
        deep: true,
        handler(next, prev) {
          if (prev.length && next.length) {
            this.emitContentPartUpdate(
              next.map((field) => ({
                label: field.data.placeholder,
                value: field.value,
              })),
            );
          }
        },
      },
    },
    data() {
      return {
        localContent: [],
      };
    },
    mounted() {
      this.localContent = [...this.content.map((field) => ({ ...field, value: null }))];
    },
  };
</script>

<style lang="scss" scoped>
  .multiple-fields {
    max-width: $field-max-width;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .multiple-fields-item {
    margin-bottom: 15px;

    @media(min-width: $md) {
      margin-bottom: 25px;
    }

    &:last-of-type {
      margin: 0;
    }
  }
</style>
