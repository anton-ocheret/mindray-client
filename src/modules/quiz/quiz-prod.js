export default {
  navigation: {
      current: '44',
      history: ['44'],
  },
  data: {
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
                  validations: ['required'],
                },
              },
              {
                type: 'input',
                data: {
                  placeholder: 'Телефон',
                  validations: ['required'],
                },
              },
              {
                type: 'input',
                data: {
                  placeholder: 'E-mail',
                  validations: ['required', 'email'],
                },
              },
            ],
          },
        },
      },
      navigation: {
        next: '18',
      },
    },
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
      navigation: {
        next: '19',
      },
    },
    '19': {
      id: '19',
      content: {
        type: 'single-input',
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
            },
          },
        },
      },
      navigation: {
        last: true,
        next: '20',
      },
    },
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
              ],
            },
          },
        },
      },
      navigation: {
        skip: '45',
        landing: function () {return window.location.href = 'https://service.medford.pro/';},
      },
    },
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
      navigation: {
        skip: '49',
      },
    },
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
      navigation: {
        skip: '45',
      },
    },
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
      navigation: {
        skip: '58',
      },
    },
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
      navigation: {
        next: '15',
      },
    },
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
      navigation: {
        further: '15',
      },
    },
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
      navigation: {
        next: '15',
      },
    },
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
      navigation: {
        next: '15',
      },
    },
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
      navigation: {
        next: '15',
      },
    },
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
      navigation: {
        next: '15',
      },
    },
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
      navigation: {
        next: '57',
      },
    },
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
      navigation: {
        skip: '15',
        next: '15',
      },
    },
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
      navigation: {
        next: '15',
      },
    },
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
      navigation: {
        skip: '15',
      },
    },
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
      navigation: {
        next: '60',
      },
    },
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
      navigation: {
        next: '15',
      },
    },
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
      navigation: {
        next: '15',
      },
    },
  },
};
