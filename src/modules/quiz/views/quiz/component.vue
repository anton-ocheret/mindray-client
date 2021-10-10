<template>
  <quiz v-if="quiz" :quiz="quiz" />
</template>

<script>
  import axios from 'axios';
  import Quiz from './component-2.vue';
  import { global } from '@shared/mixins/store';

  export default {
    name: 'QuizWrap',
    components: { Quiz },
    mixins: [global],
    data: () => ({
      quiz: null,
    }),
    mounted() {
      axios.get(`/quizes/${this.$route.params.url}`)
        .then(({ data }) => {
          this.setQuizId(data._id);
          const quiz = {
            navigation: {
              current: data.steps[0].id,
              history: [data.steps[0].id],
            },
            data: data.steps.reduce((result, step) => {
              const mappedStep = {
                id: step.id,
                content: {
                  type: step.kind,
                  data: {},
                },
                navigation: {},
              };

              if (step.heading.text) {
                mappedStep.content.data.heading = {
                  content: {
                    data: {
                      text: {
                        main: step.heading.text.main,
                      },
                    },
                  },
                };
              }

              if (step.heading.text.sub) {
                mappedStep.content.data.heading.content.data.text.sub = step.heading.text.sub;
              }

              if (step.heading.hint) {
                mappedStep.content.data.heading.hint = {
                  content: {
                    type: step.heading.hint.kind,
                    data: {
                      text: [step.heading.hint.data.text],
                    },
                  },
                };
              }

              if (step.kind === 'buttons-list') {
                mappedStep.content.data.body = {
                  content: {
                    buttons: step.body.buttons.map((button) => ({
                      navigation: { ...button.navigation },
                      data: {
                        content: {
                          text: button.text,
                        },
                      },
                    })),
                  },
                };
              }

              if (step.kind === 'single-input') {
                mappedStep.content.data.body = {
                  content: {
                    placeholder: step.body.placeholder,
                  },
                };
              }

               if (step.kind === 'single-textarea') {
                mappedStep.content.data.body = {
                  content: {
                    placeholder: step.body.placeholder,
                  },
                };
              }

              if (step.kind === 'multiple-fields') {
                mappedStep.content.data.body = {
                  content: step.body.fields.map((field) => ({
                    type: field.kind,
                    data: field.data,
                  })),
                };
              }

              if (step.kind === 'checkbox-list') {
                mappedStep.content.data.body = {
                  options: {
                    cols: step.body.cols,
                  },
                  content: {
                    checkboxes: [...step.body.checkboxes],
                  },
                };

                if (step.body.additional) {
                  mappedStep.content.data.body.content.additional = [...step.body.additional];
                }
              }

              if (step.navigation) {
                mappedStep.navigation = { ...step.navigation };
              }

              return {
                ...result,
                [step.id]: mappedStep,
              };
            }, {}),
          };

          this.quiz = quiz;
        });
    },
  };
</script>
