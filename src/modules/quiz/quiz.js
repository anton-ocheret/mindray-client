export default {
  navigation: {
    current: '1',
    history: ['1'],
  },
  data: {
    '1': {
      id: '1',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main buttons list',
                  sub: 'Heading text sub',
                },
              },
            },
            hint: {
              content: {
                type: 'text',
                data: {
                  text: ['Hint Text Paragraph 1', 'Hint Text Paragraph 2', 'Hint Text Paragraph 3'],
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '4',
                  },
                  data: {
                    content: {
                      text: 'Не важно',
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
              inputs: [
                {
                  data: {
                    content: {
                      placeholder: 'Введите сумму',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      navigation: {
        next: '2',
        skip: '3',
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
        next: '3',
        skip: '4',
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
        next: '4',
        skip: '5',
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
        next: '5',
        skip: '6',
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
        next: '6',
        skip: '1',
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
        next: '1',
        skip: '2',
      },
    },
  },
};
