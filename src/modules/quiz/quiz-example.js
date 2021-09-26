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
                  main: 'Heading text main buttons list!',
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
        further: '3',
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
        skip: '7',
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
        next: '7',
        skip: '8',
      },
    },
    '7': {
      id: '7',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main checkbox list',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Checkbox 1',
                  next: '2',
                },
                {
                  label: 'Checkbox 2',
                  next: '3',
                },
                {
                  label: 'Checkbox 1',
                  next: '4',
                },
                {
                  label: 'Checkbox 2',
                  next: '5',
                },
              ],
            },
          },
          footer: {
            content: {
              left: {
                text: 'Примерная цена',
              },
              right: {
                text: '500 тыс. руб.',
              },
            },
          },
        },
      },
      navigation: {
        // next: '8',
        skip: '9',
      },
    },
    '8': {
      id: '8',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main checkbox list with options',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              notInList: {
                link: {
                  text: 'Другие Вопросы',
                },
              },
              checkboxes: [
                {
                  label: 'Checkbox 1',
                },
                {
                  label: 'Checkbox 2',
                },
                {
                  label: 'Checkbox 1',
                },
                {
                  label: 'Checkbox 2',
                },
              ],
              additional: [
                {
                  label: 'Additional 1',
                },
                {
                  label: 'Additional 2',
                },
                {
                  label: 'Additional 1',
                },
                {
                  label: 'Additional 2',
                },
              ],
            },
          },
        },
      },
      navigation: {
        next: '9',
        skip: '10',
      },
    },
    '9': {
      id: '9',
      content: {
        type: 'radio-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main radio list with options',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              notInList: {
                link: {
                  text: 'Поиск',
                },
              },
              radios: [
                {
                  label: 'Radio 1',
                  next: '2',
                },
                {
                  label: 'Radio 2',
                  next: '5',
                },
                {
                  label: 'Radio 1',
                  next: '6',
                },
                {
                  label: 'Radio 2',
                  next: '1',
                },
              ],
            },
          },
          footer: {
            content: {
              left: {
                text: 'Примерная цена',
              },
              right: {
                text: '900 тыс. руб.',
              },
            },
          },
        },
      },
      navigation: {
        next: '10',
        skip: '11',
      },
    },
    '10': {
      id: '10',
      content: {
        type: 'single-autocomplete-multiple',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Heading text main single autocomplete multiple',
                },
              },
            },
            hint: {
              content: {
                type: 'modal',
                data: {
                  text: ['Hint Text Paragraph 1', 'Hint Text Paragraph 2', 'Hint Text Paragraph 3'],
                  img: 'hint-modal.jpg',
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
        next: '11',
        skip: '1',
      },
    },
    '11': {
      id: '11',
      content: {
        type: 'slider',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Slider Step',
                  sup: 'База знаний',
                },
              },
            },
          },
          body: {
            content: {
              heading: 'Проблема с апертурой (излучающая поверхность)',
              slides: [
                {
                  title: '1. Гель под апертуру',
                  image: {
                    x1: 'slider-example.jpg',
                    x2: 'slider-example-2x.jpg',
                  },
                  modal: {
                    image: {
                      x1: 'slider-example.jpg',
                      x2: 'slider-example.jpg',  
                    },
                  },
                },
                {
                  title: '2. Гель под апертуру',
                  image: {
                    x1: 'slider-example.jpg',
                    x2: 'slider-example-2x.jpg',
                  },
                  modal: {
                    image: {
                      x1: 'slider-example.jpg',
                      x2: 'slider-example.jpg',  
                    },
                  },
                },
                {
                  title: '3. Гель под апертуру',
                  image: {
                    x1: 'slider-example.jpg',
                    x2: 'slider-example-2x.jpg',
                  },
                },
              ],
            },
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







































export const full = {
  navigation: {
      current: '44',
      history: ['44'],
  },
  data: {
    // Привет я медБот (buttons-list)
    '1': {
      id: '1',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Привет, я MedBot, сейчас мы вместе быстро определим и решим вашу задачу. С каким отделом вас соеденить?',
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '44',
                  },
                  data: {
                    content: {
                      text: 'Отдел сервиса',
                    },
                  },
                },
                // переходим к фрейму 2
                // {
                //   navigation: {
                //     next: '3',
                //   },
                //   data: {
                //     content: {
                //       text: 'Отдел продаж',
                //     },
                //   },
                // },
              ],
            },
          },
        },
      },
      navigation: {
        // next: '2',
        skip: '44',
        // further: '44',
      },
    },

    // Если нажали кнопку "Отдел продаж"
    // "Ваша должность" фрейм 2 (buttons-list)
    '3': {
      id: '3',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Ваша должность',
                },
              },
            },
          },
          body: {
            content: {
              // кнопки
              buttons: [
                {
                  navigation: {
                    next: '4',
                  },
                  data: {
                    content: {
                      text: 'Врач',
                    },
                  },
                },
                {
                  navigation: {
                    next: '4',
                  },
                  data: {
                    content: {
                      text: 'Директор',
                    },

                  },
                },
                {
                  navigation: {
                    next: '4',
                  },
                  data: {
                    content: {
                      text: 'Медсестра',
                    },

                  },
                },
                {
                  navigation: {
                    next: '4',
                  },
                  data: {
                    content: {
                      text: 'Инженер',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // пропустить
      navigation: {
        skip: '4',
      },
    },
    // "Какое оборудование вас интересует" фрейм 3 (checkbox-list)
    '4': {
      id: '4',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Какое оборудование вас интересует',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'МРТ',
                },
                {
                  label: 'Операционный свет',
                },
                {
                  label: 'КТ',
                },
                {
                  label: 'Мне нужно несколько приборов',
                },
                {
                  label: 'Маммограф',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить"
      navigation: {
        next: '5',
      },
    },

    // ветка от фрейма 4 "Выберите модель производителя"
    // "Выберите модель производителя" фрейм 4 и дальше по этой ветке (buttons-list)
    '5': {
      id: '5',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите модель производителя',
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '6',
                  },
                  data: {
                    content: {
                      text: 'Mindray',
                    },
                  },
                },
                {
                  navigation: {
                    next: '6',
                  },
                  data: {
                    content: {
                      text: 'GE Healthcare',
                    },
                  },
                },
                {
                  navigation: {
                    next: '6',
                  },
                  data: {
                    content: {
                      text: 'Другое',
                    },
                  },
                },
                {
                  navigation: {
                    next: '9',
                  },
                  data: {
                    content: {
                      text: 'Подобрать / Я знаю модель которая мне нужна',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      navigation: {
        // next: '2',
        skip: '6',
      },
    },
    // Что для Вас является наиболее важным при покупке? ГОС (checkbox-list)
    '6': {
      id: '6',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Что для Вас является наиболее важным при покупке?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Дешево и сердито',
                },
                {
                  label: 'Только новое оборудование',
                },
                {
                  label: 'Крепкий среднячек',
                },
                {
                  label: 'Готов рассмотреть и восстановленное',
                },
                {
                  label: 'Только самое лучшее',
                },
                {
                  label: 'Я вообще-то из ГОСа и у нас все очень серьезно! Закупки, все дела...',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее"
      navigation: {
        next: '7',
      },
    },
    // Что для Вас является наиболее важным при покупке? рассрочка/лизинг (checkbox-list)
    '7': {
      id: '7',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Что для Вас является наиболее важным при покупке?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 1,
            },
            content: {
              checkboxes: [
                {
                  label: 'У меня много денег, готов заплатить 100%, но хочу скидку',
                },
                {
                  label: 'Мне нужна рассрочка ну на месяц или два, может три ...',
                },
                {
                  label: 'Мне нужен лизинг на длительный срок',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее"
      navigation: {
        next: '8',
      },
    },
    // Что для Вас является наиболее важным при покупке? только в наличии|подождать 1 месяц etc. (checkbox-list)
    '8': {
      id: '8',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Что для Вас является наиболее важным при покупке?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 1,
            },
            content: {
              checkboxes: [
                {
                  label: 'Ищу оборудование только в наличии',
                },
                {
                  label: 'Могу подождать 1 месяц',
                },
                {
                  label: 'Ну так и быть подожду 2-3 месяца',
                },
                {
                  label: 'Ой, чуть не забыл, мне будет нужен аппарат к лицензированию',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее"
      navigation: {
        next: '9',
      },
    },
    // Какая модель Вас интересует? (radio-list) Mindray
    '9': {
      id: '9',
      content: {
        type: 'radio-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Какая модель Вас интересует?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 3,
            },
            content: {
              // search
              notInList: {
                link: {
                  text: 'Поиск',
                },
              },
              radios: [
                {
                  label: 'Mindray DC-8 / DC-8 EXP',
                },
                {
                  label: 'Mindray DC-40 / DC-40 EXP',
                },
                {
                  label: 'Mindray DC-40 / DC-40 EXP',
                },
                {
                  label: 'Mindray DC-28 / DC-30',
                },
                {
                  label: 'Mindray DC-28 / DC-30',
                },
                {
                  label: 'Mindray DC-28 / DC-30',
                },
                {
                  label: 'Mindray DC-40 / DC-40 EXP',
                },
                {
                  label: 'Mindray DC-40 / DC-40 EXP',
                },
                {
                  label: 'Mindray DC-28 / DC-30',
                },
                {
                  label: 'Mindray DC-28 / DC-30',
                },
              ],
            },
          },
        },
      },
      // КНопка "далее"
      navigation: {
        next: '10',
      },
    },
    // Какая модель Вас интересует? (single-autocomlete)
    '10': {
      id: '10',
      content: {
        type: 'single-autocomplete',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Какая модель Вас интересует?',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Ультразвук',
              options: [
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
                { name: 'Ультразвуковая система GE Vscan Access' },
              ],
            },
          },
        },
      },
      // Кнопка "Дальше" для перехода на "пример комплектации"
      navigation: {
        next: '11',
      },
    },
    // "Пример комплектации" фрейм 28 (checkbox-list)
    '11': {
      id: '11',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Пример комплектации',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Конвексный датчик',
                },
                {
                  label: 'Фазированный датчик',
                },
                {
                  label: 'Линейный датчик',
                },
                {
                  label: 'Объемный датчик 4D',
                },
                {
                  label: 'Внутриполостной датчик',
                },
              ],
              additional: [
                {
                  label: 'Additional 1',
                },
                {
                  label: 'Additional 2',
                },
                {
                  label: 'Additional 1',
                },
                {
                  label: 'Additional 2',
                },
              ],
            },
          },
        },
      },
      // пока кнопка будет возвращать назад к "Выберите модель оборудования" (12-й объект)
      navigation: {
        next: '14',
      },
    },
    // Выберите модель оборудования (buttons-list)
    '12': {
      id: '12',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите модель оборудования',
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '13',
                  },
                  data: {
                    content: {
                      text: 'Портативный УЗМ',
                    },
                  },
                },
                {
                  navigation: {
                    next: '13',
                  },
                  data: {
                    content: {
                      text: 'Стационарный УЗИ',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // кнопка "пропустить" которая переключит на блок "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (Объект 14)
      navigation: {
        skip: '14',
      },
    },
    // Выберите применение оборудования(объект 13, а в фигме 27 frame) (buttons-list)
    '13': {
      id: '13',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите применение оборудования',
                },
              },
            },
          },
          body: {
            content: {
              // кнопки для перехода по категориям УЗИ
              buttons: [
                {
                  navigation: {
                    next: '11',
                  },
                  data: {
                    content: {
                      text: 'Для АК/ГИН',
                    },
                  },
                },
                {
                  navigation: {
                    next: '11',
                  },
                  data: {
                    content: {
                      text: 'Для кардиологии и сосудов',
                    },
                  },
                },
                {
                  navigation: {
                    next: '11',
                  },
                  data: {
                    content: {
                      text: 'Универсальный',
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
                {
                  navigation: {
                    next: '11',
                  },
                  data: {
                    content: {
                      text: 'Специализированный',
                    },
                  },
                },
                {
                  navigation: {
                    next: '11',
                  },
                  data: {
                    content: {
                      text: 'Мне нужна помощь в подборе',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Дальше" ведёт к 11 объекту "пример комплектации"
      navigation: {
        next: '11',
      },
    },
    // ветка от фрейма 4 всё 

    // Сравниваете ли вы этот аппарат с каким то другим УЗИ? (buttons-list) frame перед фреймом 57
    '14': {
      id: '14',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Сравниваете ли вы этот аппарат с каким-то другим УЗИ?',
                },
              },
            },
            hint: {
              content: {
                type: 'text',
                data: {
                  text: ['Нам будет проще подобрать комплектацию, датчики и опции зная кто наш конкурент основываясь на колоссальном опыте.', 
                        'Наш приоритет, что бы вы были довольны и счастливы от правильного выбора!'],
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '15',
                  },
                  data: {
                    content: {
                      text: 'Да',
                    },
                  },
                },
                {
                  navigation: {
                    next: '15',
                  },
                  data: {
                    content: {
                      text: 'Нет',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // кнопка "пропустить" которая переключит на блок "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (Объект 14)
      navigation: {
        skip: '15',
      },
    },
    // "Оставьте Ваши данные, что бы мы могли связаться с Вами" (multiple-fields) frame 57
    // Теперь остальные ветки после основного опроса должны переходить сюда 
    '15': {
      id: '15',
      content: {
        type: 'multiple-fields',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Оставьте Ваши данные, чтобы мы могли связаться с Вами',
                },
              },
            },
          },
          body: {
            content: [
              {
                type: 'input',
                data: {
                  placeholder: 'Имя',
                },
              },
              {
                type: 'input',
                data: {
                  placeholder: 'Телефон',
                },
              },
              {
                type: 'input',
                data: {
                  placeholder: 'E-mail',
                },
              },
              // {
              //   type: 'select',
              //   data: {
              //     placeholder: 'Выберите город',
              //     label: 'name',
              //     options: [
              //       { name: 'Option 1' },
              //       { name: 'Option 2' },
              //       { name: 'Option 3' },
              //       { name: 'Option 4' },
              //       { name: 'Option 5' },
              //       { name: 'Option 6' },
              //       { name: 'Option 7' },
              //       { name: 'Option 8' },
              //       { name: 'Option 9' },
              //       { name: 'Option 10' },
              //       { name: 'Option 11' },
              //       { name: 'Option 12' },
              //     ],
              //   },
              // },
            ],
          },
        },
      },
      // Кнопка "Дальше" для прехода к блоку "На каком оборудовании вы работаете сейчас?"
      navigation: {
        next: '18',
      },
    },
    // На каком оборудовании вы работаете сейчас? (buttons-list)
    '16': {
      id: '16',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'На каком оборудовании вы работаете сейчас?',
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '17',
                  },
                  data: {
                    content: {
                      text: 'Выбрать',
                    },
                  },
                },
                {
                  navigation: {
                    next: '17',
                  },
                  data: {
                    content: {
                      text: 'Пока нету, но уже скоро будет',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" для перехода к блоку "Выберите производителя"
      navigation: {
        skip: '17',
      },
    },
    // Выберите производителя (radio-list)
    '17': {
      id: '17',
      content: {
        type: 'radio-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите производителя',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              // search
              notInList: {
                link: {
                  text: 'Поиск',
                },
              },
              radios: [
                {
                  label: 'Mindray',
                },
                {
                  label: 'GE Healthcare',
                },
                {
                  label: 'Mindray',
                },
                {
                  label: 'GE Healthcare',
                },
                {
                  label: 'Mindray',
                },
                {
                  label: 'GE Healthcare',
                },
                {
                  label: 'Mindray',
                },
                {
                  label: 'GE Healthcare',
                },
                {
                  label: 'Mindray',
                },
                {
                  label: 'GE Healthcare',
                },
                {
                  label: 'Mindray',
                },
                {
                  label: 'GE Healthcare',
                },
                {
                  label: 'Mindray',
                },
                {
                  label: 'GE Healthcare',
                },
              ],
            },
          },
        },
      },
      // КНопка "далее" для перехода к блоку "Введите название медицинского учреждения которое Вы представляете"
      navigation: {
        next: '18',
      },
    },
    // "Введите название медицинского учреждения которое Вы представляете" (single input placeholder)
    '18': {
      id: '18',
      content: {
        type: 'single-input',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Введите название медицинского учреждения которое Вы представляете',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите название',
            },
          },
        },
      },
      // "Далее" переход к блоку "Введите серийный номер (SN) оборудования, если Вы его знаете"
      navigation: {
        next: '19',
      },
    },
    // Введите серийный номер (SN) оборудования, если Вы его знаете (single-input)
    '19': {
      id: '19',
      content: {
        type: 'single-autocomplete-multiple',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Введите серийный номер (SN) оборудования, если Вы его знаете',
                },
              },
            },
            hint: {
              content: {
                type: 'modal',
                data: {
                  text: ['Серийный номер всегда расположен сзади аппарата в нижней части (см. фото)'],
                  img: 'hint-modal.jpg',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите серийный номер',
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
      // "Далее" переход к блоку "Ваша заявка №43456 передана в отдел, ожидайте звонка от специалиста"
      navigation: {
        next: '20',
      },
    },
    // Ваша заявка №43456 передана в отдел, ожидайте звонка от специалиста (buttons-lis)
    '20': {
      id: '20',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Ваша заявка №43456 передана в отдел, ожидайте звонка от специалиста',
                  sub: 'Я могу быть еще чем-то полезен?',
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '44',
                  },
                  data: {
                    content: {
                      text: 'Да',
                    },
                  },
                },
                // Кнопка "Нет" перебросит на последний блок "Спасибо! До свидания"
                {
                  navigation: {
                    next: '21',
                  },
                  data: {
                    content: {
                      text: 'Нет',
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
    // "Спасибо! До свидания"
    '21': {
      id: '21',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Спасибо! До свидания',
                },
              },
            },
          },
        },
      },
      // Переход на страницу "Сервиса"
      navigation: {
        skip: '44',
      },
    },
    // Ветка со сбором данных, вопросов и т.д. по фрейму 57 закончилась. 

    // "Выберите модель оборудования". Переходим на фрейм 5 (buttons-list)
    '22': {
      id: '22',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите модель оборудования',
                },
              },
            },
          },
          body: {
            // переход "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете"
            content: {
              buttons: [
                {
                  navigation: {
                    next: '23',
                  },
                  data: {
                    content: {
                      text: 'Mindray',
                    },
                  },
                },
                {
                  navigation: {
                    next: '23',
                  },
                  data: {
                    content: {
                      text: 'GE Healthcare',
                    },
                  },
                },
                // переход на блок "Выберите комплектацию" фрейм 21
                {
                  navigation: {
                    next: '24',
                  },
                  data: {
                    content: {
                      text: 'Не важно',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" непонятно куда должно переходить но направлю на фрейм 22, блок "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете"
      navigation: {
        skip: '23',
      },
    },
    // Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете (buttons-list)
    '23': {
      id: '23',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете',
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '25',
                  },
                  data: {
                    content: {
                      text: 'до 500 тыс руб.',
                    },
                  },
                },
                {
                  navigation: {
                    next: '25',
                  },
                  data: {
                    content: {
                      text: ' до 2 млн руб.',
                    },
                  },
                },
              ],
              inputs: [
                {
                  data: {
                    content: {
                      placeholder: 'Введите бюджет',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // кнопка "пропустить" которая ведёт на фрейм 23, блок "Выберите комплектацию"
      navigation: {
        skip: '25',
      },
    },
    // "Какая модель Вас интересует?" фрейм 21, (single-autocomplete) 
    '24': {
      id: '24',
      content: {
        type: 'single-autocomplete',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Какая модель Вас интересует?',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите название модели',
              options: [
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
              ],
            },
          },
        },
      },
      // Кнопка "Дальше" для перехода на "Выберите комплектацию"
      navigation: {
        next: '25',
      },
    },
    // "Выберите комплектацию" фрейм 23 (radio-list)
    '25': {
      id: '25',
      content: {
        type: 'radio-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите комплектацию',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              radios: [
                {
                  label: 'Базовая',
                },
                {
                  label: 'Блок капнометрии в микропотоке',
                },
                {
                  label: 'Блок капнометрии в основном потоке',
                },
                {
                  label: 'Блок анализа и измерения летучих анастетиков',
                },
                {
                  label: 'Блок капнометрии в боковом потоке',
                },
              ],
            },
          },
          footer: {
            content: {
              left: {
                text: 'Примерная цена',
              },
              right: {
                text: '500 тыс. руб.',
              },
            },
          },
        },
      },
      // Сравниваете ли вы этот аппарат с каким то другим УЗИ?
      navigation: {
        next: '14',
      },
    },
    // ветка от фрейма 5 всё

    // "Выберите модель оборудования" фрейм 6 (buttons-list)
    '26': {
      id: '26',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите модель оборудования',
                },
              },
            },
          },
          body: {
            // переход "Какая модель Вас интересует?" фрейм 18
            content: {
              buttons: [
                {
                  navigation: {
                    next: '27',
                  },
                  data: {
                    content: {
                      text: 'Mindray',
                    },
                  },
                },
                {
                  navigation: {
                    next: '27',
                  },
                  data: {
                    content: {
                      text: 'GE Healthcare',
                    },
                  },
                },
                // переход на блок "Какая модель Вас интересует?" фрейм 17
                {
                  navigation: {
                    next: '28',
                  },
                  data: {
                    content: {
                      text: 'Не важно',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 18 "Какая модель Вас интересует?"
      navigation: {
        skip: '27',
      },
    },
    // "Какая модель Вас интересует?" фрейм 18 (buttons-list)
    '27': {
      id: '27',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Какая модель Вас интересует?',
                },
              },
            },
          },
          body: {
            content: {
              // переход на блок "Какая модель Вас интересует?" фрейм 19
              buttons: [
                {
                  navigation: {
                    next: '29',
                  },
                  data: {
                    content: {
                      text: 'Стационарный',
                    },
                  },
                },
                {
                  navigation: {
                    next: '29',
                  },
                  data: {
                    content: {
                      text: 'Транспортный',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 19 "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете?"
      navigation: {
        skip: '29',
      },
    },
    // "Какая модель Вас интересует?" фрейм 21, (single-autocomplete) 
    '28': {
      id: '28',
      content: {
        type: 'single-autocomplete',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Какая модель Вас интересует?',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите название модели',
              options: [
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
              ],
            },
          },
        },
      },
      // Кнопка "Дальше" для перехода на "Выберите комплектацию"
      navigation: {
        next: '25',
      },
    },
    // Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете? фрейм 19 (single input placeholder)
    '29': {
      id: '29',
      content: {
        type: 'single-input',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите название',
            },
          },
        },
      },
      // "Далее" переход к блоку Выберите комплектацию" к фрейму 20
      navigation: {
        next: '30',
      },
    },
    // "Выберите комплектацию" фрейм 20 (radio-list)
    '30': {
      id: '30',
      content: {
        type: 'radio-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите комплектацию',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              radios: [
                {
                  label: 'Базовая',
                },
                {
                  label: 'Блок капнометрии в микропотоке',
                },
                {
                  label: 'Блок капнометрии в основном потоке',
                },
                {
                  label: 'Модуль SPO2',
                },
                {
                  label: 'Блок капнометрии в боковом потоке',
                },
              ],
            },
          },
          footer: {
            content: {
              left: {
                text: 'Примерная цена',
              },
              right: {
                text: '500 тыс. руб.',
              },
            },
          },
        },
      },
      // "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"
      navigation: {
        next: '14',
      },
    },
    // ветка от фрейма 6 всё

    // "Выберите модель оборудования" фрейм 7 (buttons-list)
    '31': {
      id: '31',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите модель оборудования',
                },
              },
            },
          },
          body: {
            // переход "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете" фрейм 15
            content: {
              buttons: [
                {
                  navigation: {
                    next: '32',
                  },
                  data: {
                    content: {
                      text: 'Mindray',
                    },
                  },
                },
                {
                  navigation: {
                    next: '32',
                  },
                  data: {
                    content: {
                      text: 'GE Healthcare',
                    },
                  },
                },
                // переход на блок "Какая модель Вас интересует?" фрейм 14
                {
                  navigation: {
                    next: '33',
                  },
                  data: {
                    content: {
                      text: 'Не важно',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 15 "Какая модель Вас интересует?"
      navigation: {
        skip: '32',
      },
    },
    // "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете" фрейм 15 (single-input)
    '32': {
      id: '32',
      content: {
        type: 'single-input',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите бюджет',
            },
          },
        },
      },
      // "Далее" переход к блоку Выберите комплектацию" к фрейму 16
      navigation: {
        next: '34',
      },
    },
    // "Какая модель Вас интересует?" фрейм 14 (single-autocomplete)
    '33': {
      id: '33',
      content: {
        type: 'single-autocomplete',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Какая модель Вас интересует?',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите название модели',
              options: [
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
              ],
            },
          },
        },
      },
      // Кнопка "Дальше" для перехода на "Выберите комплектацию" фрейм 16
      navigation: {
        next: '34',
      },
    },
    // "Выберите комплектацию" фрейм 16 (radio-list)
    '34': {
      id: '34',
      content: {
        type: 'radio-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите комплектацию',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              radios: [
                {
                  label: 'Базовая',
                },
                {
                  label: 'Блок капнометрии в микропотоке',
                },
                {
                  label: 'Блок капнометрии в основном потоке',
                },
                {
                  label: 'Модуль SPO2',
                },
                {
                  label: 'Блок капнометрии в боковом потоке',
                },
              ],
            },
          },
          footer: {
            content: {
              left: {
                text: 'Примерная цена',
              },
              right: {
                text: '500 тыс. руб.',
              },
            },
          },
        },
      },
      // "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"
      navigation: {
        next: '14',
      },
    },
    // ветка по фрейму 7 всё

    // "Выберите модель оборудования" фрейм 8 (buttons-list)
    '35': {
      id: '35',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите модель оборудования',
                },
              },
            },
          },
          body: {
            // переход "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете" фрейм 12
            content: {
              buttons: [
                {
                  navigation: {
                    next: '36',
                  },
                  data: {
                    content: {
                      text: 'Монитор-дифибриллятор Mindray BeneHeart D3',
                    },
                  },
                },
                {
                  navigation: {
                    next: '36',
                  },
                  data: {
                    content: {
                      text: 'Монитор-дифибриллятор Mindray BeneHeart D6',
                    },
                  },
                },
                // переход на блок "Какая модель Вас интересует?" фрейм 12
                {
                  navigation: {
                    next: '36',
                  },
                  data: {
                    content: {
                      text: 'Не важно',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 12 "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете"
      navigation: {
        skip: '32',
      },
    },
    // "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете" фрейм 12 (single-input)
    '36': {
      id: '36',
      content: {
        type: 'single-input',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите бюджет',
            },
          },
        },
      },
      // "Далее" переход к блоку Выберите комплектацию" к фрейму 16
      navigation: {
        next: '37',
      },
    },
    // "Выберите комплектацию" фрейм 13 (radio-list)
    '37': {
      id: '37',
      content: {
        type: 'radio-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите комплектацию',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              radios: [
                {
                  label: 'Базовая',
                },
                {
                  label: 'Блок капнометрии в микропотоке',
                },
                {
                  label: 'Блок капнометрии в основном потоке',
                },
                {
                  label: 'Модуль SPO2',
                },
                {
                  label: 'Блок капнометрии в боковом потоке',
                },
              ],
            },
          },
          footer: {
            content: {
              left: {
                text: 'Примерная цена',
              },
              right: {
                text: '500 тыс. руб.',
              },
            },
          },
        },
      },
      // "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"
      navigation: {
        next: '14',
      },
    },
    //  ветка по фрейму 8 всё

    // "Выберите модель оборудования" фрейм 9 (buttons-list)
    '38': {
      id: '38',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите модель оборудования',
                },
              },
            },
          },
          body: {
            // переход "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете" фрейм 12
            content: {
              buttons: [
                {
                  navigation: {
                    next: '39',
                  },
                  data: {
                    content: {
                      text: 'Unibase 30',
                    },
                  },
                },
                {
                  navigation: {
                    next: '39',
                  },
                  data: {
                    content: {
                      text: 'Hybase 3000',
                    },
                  },
                },
                {
                  navigation: {
                    next: '39',
                  },
                  data: {
                    content: {
                      text: 'Hybase 6100',
                    },
                  },
                },
                {
                  navigation: {
                    next: '39',
                  },
                  data: {
                    content: {
                      text: 'Hybase 8300/8500',
                    },
                  },
                },
                // переход на блок "Какая модель Вас интересует?" фрейм 12
                {
                  navigation: {
                    next: '39',
                  },
                  data: {
                    content: {
                      text: 'Не важно',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 12 "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете"
      navigation: {
        skip: '39',
      },
    },
    // "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете" фрейм 10 (single-input)
    '39': {
      id: '39',
      content: {
        type: 'single-input',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите бюджет',
            },
          },
        },
      },
      // "Далее" переход к блоку "Какое применение планируется?" к фрейму 16
      navigation: {
        next: '40',
      },
    },
    // "Какое применение планируется?" фрейм 11 (buttons-list)
    '40': {
      id: '40',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите модель оборудования',
                },
              },
            },
          },
          body: {
            // переход "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете" фрейм 12
            content: {
              buttons: [
                {
                  navigation: {
                    next: '41',
                  },
                  data: {
                    content: {
                      text: 'Для общей хирургии',
                    },
                  },
                },
                {
                  navigation: {
                    next: '41',
                  },
                  data: {
                    content: {
                      text: 'Для гинекологии',
                    },
                  },
                },
                {
                  navigation: {
                    next: '41',
                  },
                  data: {
                    content: {
                      text: 'Для урологии',
                    },
                  },
                },
                {
                  navigation: {
                    next: '41',
                  },
                  data: {
                    content: {
                      text: 'Для нейрохирургии',
                    },
                  },
                },
                // переход на блок "Какая модель Вас интересует?" фрейм 12
                {
                  navigation: {
                    next: '41',
                  },
                  data: {
                    content: {
                      text: 'Для офтальмологии',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 29 "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете"
      navigation: {
        skip: '41',
      },
    },
    // "Пример комплектации" фрейм 29 (checkbox-list)
    '41': {
      id: '41',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Пример комплектации',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Конвексный датчик',
                },
                {
                  label: 'Фазированный датчик',
                },
                {
                  label: 'Линейный датчик',
                },
                {
                  label: 'Объемный датчик 4D',
                },
                {
                  label: 'Внутриполостной датчик',
                },
              ],
              additional: [
                {
                  label: 'Модуль 4D (Модуль для подключения объемных датчиков)',
                },
                {
                  label: 'TDI (Тканевой допплер, включая цветное картирование, импульсный тканевой допплер, энергетический тканевой допплер и тканевой М-режим)',
                },
                {
                  label: 'Elastography (Опция оценки эластичности ткани (эластография), с программой анализа)',
                },
                {
                  label: 'Smart OB (Программа автоматического измерения основных параметров биометрии плода в акушерстве)',
                },
                {
                  label: 'Auto IMT (Автоматический расчет толщины комплекса интима-медиа с программой анализа)',
                },
                {
                  label: 'iWorks (Автоматизированные рабочие протоколы для всех основных типов исследований)',
                },
                {
                  label: 'iNeedle (Опция улучшения визуализации иглы для линейных датчиков)',
                },
              ],
            },
          },
        },
      },
      // пока кнопка будет возвращать назад к "Выберите модель оборудования" (12-й объект)
      navigation: {
        next: '14',
      },
    },
    // ветка по фрейму 9 всё

    // отдельный объект для фрейма 30 (single-autocomplete)
    '42': {
      id: '42',
      content: {
        type: 'single-autocomplete',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Опишите пожалуйста, какое оборудование Вас интересует',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите текст',
              options: [
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
                { name: 'GE Healthcare' },
                { name: 'Mindray' },
              ],
            },
          },
        },
      },
      // Кнопка "Дальше" для перехода на "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"
      navigation: {
        next: '14',
      },
    },

    // отдельный объект для фрейма 31 (single-input)
    '43': {
      id: '43',
      content: {
        type: 'single-input',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите бюджет',
            },
          },
        },
      },
      // "Далее" переход к блоку "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"
      navigation: {
        next: '14',
      },
    },

    // Если нажали на кнопку "Отдел сервиса"
    // "Выберите интересущий Вас пункт" фрейм 41 (buttons-list)
    '44': {
      id: '44',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите интересущий Вас пункт',
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '45',
                  },
                  data: {
                    content: {
                      text: 'Ввод в эксплуатацию',
                    },
                  },
                },
                {
                  navigation: {
                    next: '45',
                  },
                  data: {
                    content: {
                      text: 'Техническое обслуживание',
                    },
                  },
                },
                {
                  navigation: {
                    next: '45',
                  },
                  data: {
                    content: {
                      text: 'Диагностика',
                    },
                  },
                },
                {
                  navigation: {
                    next: '45',
                  },
                  data: {
                    content: {
                      text: 'Консультация',
                    },
                  },
                },
                // переход к блоку "Для какого оборудования вам требуется ремонт?" фрейм 42
                {
                  navigation: {
                    next: '46',
                  },
                  data: {
                    content: {
                      text: 'Ремонт',
                    },
                  },
                },
                // переход к блоку "Для какого оборудования Вы ищите запчасть?" фрейм 44
                {
                  navigation: {
                    next: '47',
                  },
                  data: {
                    content: {
                      text: 'Купить запчасть',
                    },
                  },
                },
                // переход к блоку "С чем связана Ваша проблема?" фрейм 48
                {
                  navigation: {
                    next: '48',
                  },
                  data: {
                    content: {
                      text: 'Проблема с датчиком УЗИ (ремонт)',
                    },
                  },
                },
                // переход на блок "Какая модель Вас интересует?" фрейм 12
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 12 "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете"
      navigation: {
        skip: '45',
      },
    },
    // "Выберите тип оборудования" фрейм 32 (buttons-list)
    '45': {
      id: '45',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Выберите тип оборудования',
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '49',
                  },
                  data: {
                    content: {
                      text: 'УЗИ',
                    },
                  },
                },
                {
                  navigation: {
                    next: '49',
                  },
                  data: {
                    content: {
                      text: 'НДА',
                    },
                  },
                },
                {
                  navigation: {
                    next: '49',
                  },
                  data: {
                    content: {
                      text: 'ИВЛ',
                    },
                  },
                },
                {
                  navigation: {
                    next: '49',
                  },
                  data: {
                    content: {
                      text: 'Монитор пациента',
                    },
                  },
                },
                {
                  navigation: {
                    next: '49',
                  },
                  data: {
                    content: {
                      text: 'Дефибрилляторы',
                    },
                  },
                },
                {
                  navigation: {
                    next: '49',
                  },
                  data: {
                    content: {
                      text: 'Операционные столы',
                    },
                  },
                },
                {
                  navigation: {
                    next: '49',
                  },
                  data: {
                    content: {
                      text: 'Другое',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 40 "Подробно опишите Вашу проблему"
      navigation: {
        skip: '49',
      },
    },
    // "Для какого оборудования вам требуется ремонт?" фрейм 42 (buttons-list)
    '46': {
      id: '46',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Для какого оборудования вам требуется ремонт?',
                },
              },
            },
          },
          body: {
            content: {
              buttons: [
                {
                  navigation: {
                    next: '50',
                  },
                  data: {
                    content: {
                      text: 'УЗИ',
                    },
                  },
                },
                {
                  navigation: {
                    next: '51',
                  },
                  data: {
                    content: {
                      text: 'НДА',
                    },
                  },
                },
                {
                  navigation: {
                    next: '52',
                  },
                  data: {
                    content: {
                      text: 'ИВЛ',
                    },
                  },
                },
                {
                  navigation: {
                    next: '53',
                  },
                  data: {
                    content: {
                      text: 'Монитор пациента',
                    },
                  },
                },
                {
                  navigation: {
                    next: '54',
                  },
                  data: {
                    content: {
                      text: 'Дефибрилляторы',
                    },
                  },
                },
                {
                  navigation: {
                    next: '55',
                  },
                  data: {
                    content: {
                      text: 'Операционные столы',
                    },
                  },
                },
                {
                  navigation: {
                    next: '56',
                  },
                  data: {
                    content: {
                      text: 'Другое',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 40 "Подробно опишите Вашу проблему"
      navigation: {
        skip: '45',
      },
    },
    // "Для какого оборудования Вы ищите запчасть?" фрейм 44 (buttons-list)
    '47': {
      id: '47',
      content: {
        type: 'buttons-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Для какого оборудования Вы ищите запчасть?',
                },
              },
            },
          },
          body: {
            // переход "Укажите, пожалуйста, примерный бюджет, на который вы рассчитываете" фрейм 12
            content: {
              buttons: [
                {
                  navigation: {
                    next: '58',
                  },
                  data: {
                    content: {
                      text: 'УЗИ',
                    },
                  },
                },
                {
                  navigation: {
                    next: '58',
                  },
                  data: {
                    content: {
                      text: 'НДА',
                    },
                  },
                },
                {
                  navigation: {
                    next: '58',
                  },
                  data: {
                    content: {
                      text: 'ИВЛ',
                    },
                  },
                },
                {
                  navigation: {
                    next: '58',
                  },
                  data: {
                    content: {
                      text: 'Другое',
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // Кнопка "Пропустить" на фрейм 40 "Подробно опишите Вашу проблему"
      navigation: {
        skip: '58',
      },
    },
    // "С чем связана Ваша проблема?" фрейм 48 (checkbox-list)
    '48': {
      id: '48',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'С чем связана Ваша проблема?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Проблема с апертурой (излучающая поверхность)',
                },
                {
                  label: 'Проблема с коннектером',
                },
                {
                  label: 'Проблема с коннектером',
                },
                {
                  label: 'Шумы и помехи в области интереса',
                },
                {
                  label: 'Проблема с кабелем',
                },
              ],
              additional: [
                {
                  label: 'Проблема с апертурой (излучающая поверхность)',
                },
                {
                  label: 'Проблема с апертурой (излучающая поверхность)',
                },
                {
                  label: '️Проблема с пьезокристаллом',
                },
                {
                  label: '️Проблема с пьезокристаллом',
                },
                {
                  label: 'Проблема с кабелем',
                },
                {
                  label: 'Проблема с кабелем',
                },
              ],
            },
          },
        },
      },
      // пока кнопка будет возвращать назад к "Выберите модель оборудования" (12-й объект)

      // UPD Убрать переход на сраницу “Возможные причины” и “Возможные решения” (skip 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (next  15)
      navigation: {
        next: '15',
      },
    },

    // "Введите данные" фрейм 33 (multiple-fields)
    '49':  {
      id: '49',
      content: {
        type: 'multiple-fields',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Введите данные',
                },
              },
            },
          },
          body: {
            content: [
              {
                type: 'input',
                data: {
                  placeholder: 'Модель оборудования',
                },
              },
              {
                type: 'textarea',
                data: {
                  placeholder: 'Описание проблемы',
                },
              },
            ],
          },
        },
      },
      // Кнопка "пропустить" для переходя к блоку "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" 
      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (skip 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (skip 15)
      navigation: {
        further: '15',
      },
    },
    // ветка от блока "Выберите тип оборудования" всё 

    // Ветки для блока "Ремонт"
    // "С чем связана Ваша проблема?" фрейм 34 (checkbox-list)
    '50': {
      id: '50',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'С чем связана Ваша проблема?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Проблемы с дисплеем/тачскрином',
                },
                {
                  label: 'Проблемы с трубкой и манжетой',
                },
                {
                  label: 'Проблемы с утюгами дефибриляции',
                },
                {
                  label: 'Проблемы с кабелем ЭКГ',
                },
                {
                  label: 'Проблемы с рабочей панелью (кнопками)',
                },
                {
                  label: 'Другое',
                },
                {
                  label: 'Проблемы с датчиком SpO2/Температуры',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее" к блоку "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"

      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами"
      navigation: {
        next: '15',
      },
    },
    // "С чем связана Ваша проблема?" фрейм 35 (checkbox-list)
    '51': {
      id: '51',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'С чем связана Ваша проблема?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Проблемы с дисплеем/тачскрином',
                },
                {
                  label: 'Проблемы с трубкой и манжетой',
                },
                {
                  label: 'Проблемы с утюгами дефибриляции',
                },
                {
                  label: 'Проблемы с кабелем ЭКГ',
                },
                {
                  label: 'Проблемы с рабочей панелью (кнопками)',
                },
                {
                  label: 'Другое',
                },
                {
                  label: 'Проблемы с датчиком SpO2/Температуры',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее" к блоку "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"

      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (skip 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (skip 15)
      navigation: {
        next: '15',
      },
    },
    // "С чем связана Ваша проблема?" фрейм 36 (checkbox-list)
    '52': {
      id: '52',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'С чем связана Ваша проблема?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Некорректная работа турбины',
                },
                {
                  label: 'Проблемы с режимами работы',
                },
                {
                  label: '️Некорректная работа датчиков потока',
                },
                {
                  label: 'Проблемы с рабочей панелью (кнопками)',
                },
                {
                  label: 'Некорректная работа датчика кислорода',
                },
                {
                  label: 'Другое',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее" к блоку "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"

      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (skip 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (skip 15)
      navigation: {
        next: '15',
      },
    },
    // "С чем связана Ваша проблема?" фрейм 37 (checkbox-list)
    '53': {
      id: '53',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'С чем связана Ваша проблема?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Некорректная работа компрессора',
                },
                {
                  label: 'Проблемы с дыхательной системой',
                },
                {
                  label: '️️Некорректная работа датчиков потока',
                },
                {
                  label: 'Проблемы с режимами работы',
                },
                {
                  label: 'Некорректная работа датчика кислорода',
                },
                {
                  label: 'Проблемы с рабочей панелью (кнопками)',
                },
                {
                  label: 'Высокая утечка в дыхательной системе',
                },
                {
                  label: 'Другое',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее" к блоку "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"

      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (skip 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (skip 15)
      navigation: {
        next: '15',
      },
    },
    // "С чем связана Ваша проблема?" фрейм 38 (checkbox-list)
    '54': {
      id: '54',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'С чем связана Ваша проблема?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 2,
            },
            content: {
              checkboxes: [
                {
                  label: 'Проблемы с датчиком',
                },
                {
                  label: '️Заторможенная работа/долгая загрузка системы',
                },
                {
                  label: '️️️Шумы и помехи в области интереса',
                },
                {
                  label: 'Проблемы с режимами работы УЗИ',
                },
                {
                  label: '️Проблемы с рабочей панелью(кнопками)',
                },
                {
                  label: 'Другое',
                },
                {
                  label: '️Аппарат не включается',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее" к блоку "Проблемы с датчиком" фрейм 43
      navigation: {
        next: '57',
      },
    },
    // "Проблемы с датчиком" фрейм 43 (checkbox-list)
    '57': {
      id: '54',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'С чем связана Ваша проблема?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 1,
            },
            content: {
              checkboxes: [
                {
                  label: 'Проблема с апертурой',
                },
                {
                  label: '️Проблема с пьезокристаллами',
                },
                {
                  label: '️️️Проблема с кабелем',
                },
                {
                  label: 'Проблема с коннектером',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее" к блоку "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"

      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (skip 14, next 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (skip 15)
      navigation: {
        skip: '15',
        next: '15',
      },
    },
    // "С чем связана Ваша проблема?" фрейм 39 (checkbox-list)
    '55': {
      id: '55',
      content: {
        type: 'checkbox-list',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'С чем связана Ваша проблема?',
                },
              },
            },
          },
          body: {
            options: {
              cols: 1,
            },
            content: {
              checkboxes: [
                {
                  label: 'Проблемы с регулировкой положения секций',
                },
                {
                  label: '️Проблемы с пультом управления',
                },
                {
                  label: 'Другое',
                },
              ],
            },
          },
        },
      },
      // Кнопка "Далее" к блоку "Сравниваете ли вы этот аппарат с каким то другим УЗИ?"

      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (next 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (next 15)
      navigation: {
        next: '15',
      },
    },
    // "Подробно опишите Вашу проблему" фрейм 40 (single-textarea)
    '56': {
      id: '56',
      content: {
        type: 'single-textarea',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Подробно опишите Вашу проблему',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите текст',
            },
          },
        },
      },
      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (skip 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (skip 15)
      navigation: {
        skip: '15',
      },
    },
    // ветка по блоку "ремонт" от фрейма 42 всё

    // ветка от блока "Купить запчасть" от фрейма 44
    // "Опишите подробнее какая запчасть Вам нужна" фрейм 45
    '58': {
      id: '58',
      content: {
        type: 'single-textarea',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Опишите подробнее какая запчасть Вам нужна',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите текст',
            },
          },
        },
      },
      navigation: {
        further: '59',
      },
    },
    // "Введите Парт-номер (PN) запасной части, если Вы его знаете" фрейм 46
    '59': {
      id: '59',
      content: {
        type: 'single-input',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Введите Парт-номер (PN) запасной части, если Вы его знаете',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите парт-номер',
            },
          },
        },
      },
      // кнопка "далее" к блоку "Введите сеийный номер (SN) оборудования, если Вы его знаете" фрейм 47
      navigation: {
        next: '60',
      },
    },
    // "Введите сеийный номер (SN) оборудования, если Вы его знаете" фрейм 47
    '60': {
      id: '60',
      content: {
        type: 'single-input',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Введите сеийный номер (SN) оборудования, если Вы его знаете',
                },
              },
            },
          },
          body: {
            content: {
              placeholder: 'Введите серийный номер',
            },
          },
        },
      },
      // кнопка "далее" к блоку "Введите сеийный номер (SN) оборудования, если Вы его знаете" фрейм 47
      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (next 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (next 15)
      navigation: {
        next: '15',
      },
    },
    // ветка от блока "Купить запчасть" от фрейма 44 всё

    // ветка от блока "С чем связана Ваша проблема?" фрейма 48
    // "Возможные причины" фрейм 51. (slider)
    '61': {
      id: '61',
      content: {
        type: 'slider',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Возможные причины:',
                  sup: 'База знаний',
                },
              },
            },
          },
          body: {
            content: {
              heading: 'Проблема с апертурой (излучающая поверхность)',
              slides: [
                {
                  title: '1. Гель под апертуру',
                  image: {
                    x1: 'slider-example.jpg',
                    x2: 'slider-example-2x.jpg',
                  },
                  modal: {
                    image: {
                      x1: 'slider-example.jpg',
                      x2: 'slider-example.jpg',  
                    },
                  },
                },
                {
                  title: '2. Гель под апертуру',
                  image: {
                    x1: 'slider-example.jpg',
                    x2: 'slider-example-2x.jpg',
                  },
                  modal: {
                    image: {
                      x1: 'slider-example.jpg',
                      x2: 'slider-example.jpg',  
                    },
                  },
                },
                {
                  title: '3. Гель под апертуру',
                  image: {
                    x1: 'slider-example.jpg',
                    x2: 'slider-example-2x.jpg',
                  },
                  modal: {
                    image: {
                      x1: 'slider-example.jpg',
                      x2: 'slider-example.jpg',  
                    },
                  },
                },
              ],
            },
          },
        },
      },
      navigation: {
        next: '62',
      },
    },
    // "Возможные решения" фрейм 56. Схематично
    '62': {
      id: '62',
      content: {
        type: 'slider',
        data: {
          heading: {
            content: {
              data: {
                text: {
                  main: 'Возможные решения:',
                  sup: 'База знаний',
                },
              },
            },
          },
          body: {
            content: {
              heading: 'Проблема с апертурой (излучающая поверхность)',
              slides: [
                {
                  title: '1. Гель под апертуру',
                  image: {
                    x1: 'slider-example.jpg',
                    x2: 'slider-example-2x.jpg',
                  },
                  modal: {
                    image: {
                      x1: 'slider-example.jpg',
                      x2: 'slider-example.jpg',  
                    },
                  },
                },
                {
                  title: '2. Гель под апертуру',
                  image: {
                    x1: 'slider-example.jpg',
                    x2: 'slider-example-2x.jpg',
                  },
                  modal: {
                    image: {
                      x1: 'slider-example.jpg',
                      x2: 'slider-example.jpg',  
                    },
                  },
                },
                {
                  title: '3. Гель под апертуру',
                  image: {
                    x1: 'slider-example.jpg',
                    x2: 'slider-example-2x.jpg',
                  },
                  modal: {
                    image: {
                      x1: 'slider-example.jpg',
                      x2: 'slider-example.jpg',  
                    },
                  },
                },
              ],
            },
          },
        },
      },
      // UPD Убрать переход на сраницу "Сравниваете ли вы этот аппарат с каким то другим УЗИ?" (next 14) и поменять 
      // переход на страницу "Оставьте Ваши данные, что бы мы могли связаться с Вами" (next 15)
      navigation: {
        next: '15',
      },
    },
  },
};
