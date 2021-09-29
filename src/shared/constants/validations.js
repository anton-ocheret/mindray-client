import { required, email } from 'vuelidate/lib/validators';

export default {
  required: {
    name: 'required',
    handler: required,
    message: 'Обязательное поле',
  },
  email: {
    name: 'email',
    handler: email,
    message: 'Введите пожалуйста валидный e-mail',
  },
};
