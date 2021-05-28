export default {
  navigation: {
    prev: '1',
    first: '1',
  },
  steps: {
    '1': {
      id: '1',
      type: 'buttons-list',
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
        '1': {
          id: '1',
          next: 'next question id',
          content: {
            text: 'button text',
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
            text: 'button 2 text',
            hint: {
              type: 'text' || 'modal',
            },
          },
        },
      },
      navigation: {
        next: 'next id',
        skip: 'skip id',
      },
    },
    2: {
      id: 2,
    },
  },
};

// ширина 824px
