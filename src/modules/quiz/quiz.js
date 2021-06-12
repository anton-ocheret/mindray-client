export default {
  navigation: {
    first: '6',
    prev: '2',
  },
  data: {
    '1': {
      id: '1',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            hint: {
              content: {
                type: 'text',
                data: {
                  text: ['Hint Text Paragraph 1', 'Hint Text Paragraph 2', 'Hint Text Paragraph 3'],
                },
              },
            },
            content: {
              data: {
                text: {
                  main: 'Heading text main',
                  sub: 'Heading text sub',
                },
              },
            },
          },
          body: {
            content: [
              {
                next: 'next question id',
                data: {
                  content: {
                    text: 'Отдел сервиса',
                  },
                  hint: {
                    content: {
                      type: 'text',
                      data: {
                        text: ['Hint', 'Hint Text', 'Hint Another Text'],
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },
      navigation: {
        next: 'skip id',
        skip: 'skip id',
      },
    },
    '2': {
      id: '2',
      content: {
        type: 'single-input',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main single input',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Single input placeholder',
            },
          },
        },
      },
      navigation: {
        next: 'skip id',
        skip: 'skip id',
      },
    },
    '3': {
      id: '3',
      content: {
        type: 'single-textarea',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main single textarea',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Single input placeholder',
            },
          },
        },
      },
      navigation: {
        next: 'skip id',
        skip: 'skip id',
      },
    },
    '4': {
      id: '4',
      content: {
        type: 'single-select',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main single select',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Single select placeholder',
              options: [
                { name: 'Option 1' },
                { name: 'Option 2' },
                { name: 'Option 3' },
                { name: 'Option 4' },
                { name: 'Option 5' },
                { name: 'Option 6' },
                { name: 'Option 7' },
                { name: 'Option 8' },
                { name: 'Option 9' },
                { name: 'Option 10' },
                { name: 'Option 11' },
                { name: 'Option 12' },
              ],
            },
          },
        },
      },
      navigation: {
        next: 'skip id',
        skip: 'skip id',
      },
    },
    '5': {
      id: '5',
      content: {
        type: 'single-autocomplete',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main single autocomplete',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Single autocomplete placeholder',
              options: [
                { name: 'Option 1' },
                { name: 'Option 2' },
                { name: 'Option 3' },
                { name: 'Option 4' },
                { name: 'Option 5' },
                { name: 'Option 6' },
                { name: 'Option 7' },
                { name: 'Option 8' },
                { name: 'Option 9' },
                { name: 'Option 10' },
                { name: 'Option 11' },
                { name: 'Option 12' },
              ],
            },
          },
        },
      },
      navigation: {
        next: 'skip id',
        skip: 'skip id',
      },
    },
    '6': {
      id: '6',
      content: {
        type: 'multiple-fields',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main multiple fields',
                },
              },
            },
          },
          body: {
            content: [
              {
                type: 'select',
                data: {
                  placeholder: 'Select placeholder',
                  label: 'name',
                  options: [
                    { name: 'Option 1' },
                    { name: 'Option 2' },
                    { name: 'Option 3' },
                    { name: 'Option 4' },
                    { name: 'Option 5' },
                    { name: 'Option 6' },
                    { name: 'Option 7' },
                    { name: 'Option 8' },
                    { name: 'Option 9' },
                    { name: 'Option 10' },
                    { name: 'Option 11' },
                    { name: 'Option 12' },
                  ],
                },
              },
              {
                type: 'textarea',
                data: {
                  placeholder: 'Textarea placeholder',
                },
              },
              {
                type: 'input',
                data: {
                  placeholder: 'Input placeholder',
                },
              },
            ],
          },
        },
      },
      navigation: {
        next: 'skip id',
        skip: 'skip id',
      },
    },
  },
};
