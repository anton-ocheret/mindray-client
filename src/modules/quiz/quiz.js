export default {
  navigation: {
    first: '4',
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
            { name: 'Option 1' },
            { name: 'Option 2' },
            { name: 'Option 3' },
            { name: 'Option 1' },
            { name: 'Option 2' },
            { name: 'Option 3' },
            { name: 'Option 1' },
            { name: 'Option 2' },
            { name: 'Option 3' },
          ],
        },
      },
      navigation: {
        skip: 'skip id',
      },
    },
  },
};
