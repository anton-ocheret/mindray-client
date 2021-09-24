export default {
    navigation: {
        current: '44',
        history: ['44'],
    },
    data: {
 
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
          landing: function () {return window.location.href = 'https://service.medford.pro/';},
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
