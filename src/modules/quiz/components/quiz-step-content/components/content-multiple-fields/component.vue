<template>
  <div class="multiple-fields">
    <div
      v-for="(fieldValue, fieldKey) in fields"
      class="multiple-fields-item"
      :key="fieldKey"
    >
      <component
        :is="`base-${fieldValue.type}`"
        :error="getError(fieldKey)"
        v-model="fieldValue.value"
        class="app-text app-text--lg"
        v-bind="fieldValue.data"
        @input="() => handleInput(fieldKey)"
      />
    </div>
  </div>  
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { global } from '@shared/mixins/store';

  import emitContentPartUpdate from '@modules/quiz/mixins/emit-content-part-update';

  import { VALIDATIONS } from '@shared/constants';

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
    mixins: [emitContentPartUpdate, validationMixin, global],
    validations() {
      return {
        fields: {
          ...this.content.reduce(
            (result, item, index) => item.data.validations ? ({
              ...result,
              [`${item.type}${index}`]: {
                value: item.data.validations.reduce(
                  (result, item) => ({
                    ...result,
                    [VALIDATIONS[item].name]: VALIDATIONS[item].handler,
                  }),
                  {},
                ),
              },
            }) : { ...result },
            {},
          ),
        },
      };
    },
    props: {
      content: {
        type: Array,
        required: true,
      },
    },
    watch: {
      fields: {
        deep: true,
        handler(next) {
          const content = Object.entries(next).map(([,data]) => data);
          return content.length && this.emitContentPartUpdate(
             content.map((field) => ({
              label: field.data.placeholder,
              value: field.value,
            })),
          );
        },
      },
      $v: {
        deep: true,
        handler(next) {
          if (next && next.$anyDirty) {
            this.quizToggleStepValidity(!next.$invalid);
          }
        },
      },
    },
    data() {
      return {
        fields: {},
      };
    },
    methods: {
      getError(fieldKey) {
        const shoulValidate = this.$v.fields && this.$v.fields[fieldKey] && this.$v.fields[fieldKey].$dirty;
        const invalidValidationKey = shoulValidate ? this.$v.fields[fieldKey].$model.data.validations.find((validation) => this.$v.fields[fieldKey].value[validation] === false) : undefined;

        return invalidValidationKey ? ({
          error: true,
          message: VALIDATIONS[invalidValidationKey].message,
        }) : undefined;
      },
      handleInput(fieldKey) {
        if (this.$v.fields && this.$v.fields[fieldKey]) {
          this.$v.fields[fieldKey].$touch();
        }
      },
      handleValidation(callback) {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          callback();
        }
      },
    },
    mounted() {
      this.content.forEach((field, index) => {
        this.$set(this.fields, `${field.type}${index}`, {
          ...field,
          value: null,
        });
      });

      this.$root.$on('quiz:validate-step', this.handleValidation);
    },
    beforeDestroy() {
      this.$root.$off('quiz:validate-step', this.handleValidation);
      this.quizToggleStepValidity(true);
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
    margin-bottom: 25px;

    &:last-of-type {
      margin: 0;
    }
  }
</style>
