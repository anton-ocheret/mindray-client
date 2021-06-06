export default {
  navigation: {
    first: '5',
    prev: '1',
  },
  steps: {
    '3': {
      id: '3',
      heading: {
        text: 'Single Input Question',
      },
      content: {
        type: 'single-textarea',
        data: {
          placeholder: 'Placeholder',
        },
      },
      navigation: {
        skip: 'skip id',
      },
    },
    '1,': {
      id: '1',
      heading: {
        text: 'Пожалуйста, напишите свой вопрос и специалист свяжется с Вами в ближайшее время',
        hint: {
          type: 'text' || 'modal',
          content: {
            image: 'url',
            paragraphs: ['Text', 'Some Another Text'],
          },
        },
      },
      content: {
        type: 'buttons',
        data: {
          '1': {
            id: '1',
            next: 'next question id',
            content: {
              text: 'Отдел сервиса',
              hint: {
                type: 'text' || 'modal',
                content: {
                  image: 'url',
                  paragraphs: ['Text', 'Some Another Text'],
                },
              },
            },
          },
          '2': {
            id: '2',
            next: 'next question id',
            content: {
              text: 'Отдел продаж',
            },
          },
        },
      },
      navigation: {
        next: 'next id',
        skip: 'skip id',
      },
    },
    '2': {
      id: 2,
      heading: {
        text: 'Single Input Question',
      },
      content: {
        type: 'single-input',
        data: {
          placeholder: 'Placeholder onput',
        },
      },
      navigation: {
        skip: 'skip id',
      },
    },
    '4': {
      id: '4',
      heading: {
        text: 'Single Autocomplete Question',
      },
      content: {
        type: 'single-autocomplete',
        data: {
          placeholder: 'Placeholder',
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
      navigation: {
        skip: 'skip id',
      },
    },
    '5': {
      id: '5',
      heading: {
        text: 'Single Select Type',
      },
      content: {
        type: 'single-select',
        data: {
          placeholder: 'Select Placeholder',
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
      navigation: {
        skip: 'skip id',
      },
    },
  },
};
